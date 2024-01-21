import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Data from '../Helpers/Data'

const DeveloperQuestLead = ({ textfield, stateSearch }) => {
    const { data } = Data()

    const dataSearch = data.map(data => {
        for (const key in data.teaches) {
            if (Array.isArray(data.teaches[key])) {
                data.teaches[key].forEach(item => {
                    if (item.name === textfield) {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                logo={item.logo}
                                name={item.name}
                                idioma={item.idioma}
                                timeYoutube={item.timeYoutube}
                                socialNetworks={item.socialNetworks}
                            />
                        )
                    }
                });
            }
        }
    })

    useEffect(() => {
        data
        dataSearch
    }, [textfield])

    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex gap-5 justify-center items-center flex-wrap py-6">
                    {
                        stateSearch ? (
                            data.map(data => {
                                return (
                                    <Card
                                        key={data.id}
                                        id={data.id}
                                        logo={data.logo}
                                        name={data.name}
                                        idioma={data.idioma}
                                        timeYoutube={data.timeYoutube}
                                        socialNetworks={data.socialNetworks}
                                    />
                                )
                            })
                        ) : (
                            dataSearch
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DeveloperQuestLead
