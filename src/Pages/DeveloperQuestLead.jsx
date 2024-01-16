import React, { useEffect } from 'react'
import Card from '../Components/Card'
import Data from '../Helpers/Data'

const DeveloperQuestLead = () => {
    const { data } = Data()

    useEffect(() => {
        data
    },[])

    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex gap-5 justify-center items-center flex-wrap py-6">
                    {
                        data.map(data => {
                            return (
                                <Card
                                    key = {data.id}
                                    id = {data.id} 
                                    logo = {data.logo}
                                    name = {data.name}
                                    idioma = {data.idioma}
                                    timeYoutube = {data.timeYoutube}
                                    socialNetworks = {data.socialNetworks}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DeveloperQuestLead
