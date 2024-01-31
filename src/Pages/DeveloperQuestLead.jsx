import React, { useEffect } from 'react'
import { Fab } from '@mui/material'
import { FaArrowUp } from "react-icons/fa";
import Card from '../Components/Card'
import Data from '../Helpers/Data'
import ScrollTop from '../Components/ScrollTop'

const DeveloperQuestLead = ({ textfield, stateSearch }) => {
    const { data } = Data()

    useEffect(() => {
        data
    }, [textfield])

    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex gap-5 justify-center items-center flex-wrap py-6">

                    {
                        data.map(data => {
                            const tecnologies = [
                                data.teaches.languages, 
                                data.teaches.frameworks, 
                                data.teaches.queryLanguajes, 
                                data.teaches.ide]
                            const tecnology = tecnologies.flatMap(tecno => tecno.map(tec => tec.name))

                            return (
                                stateSearch
                                    ? ( 
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

                                    : (
                                        textfield === null || textfield === ''
                                            ? <Card
                                                key={data.id}
                                                id={data.id}
                                                logo={data.logo}
                                                name={data.name}
                                                idioma={data.idioma}
                                                timeYoutube={data.timeYoutube}
                                                socialNetworks={data.socialNetworks}
                                            />

                                            : tecnology.includes(textfield)
                                                ? (
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
                                                : null
                                    )
                            )
                        })
                    }
                </div>
            </div>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <FaArrowUp/>
                </Fab>
            </ScrollTop>
        </>
    )
}

export default DeveloperQuestLead
