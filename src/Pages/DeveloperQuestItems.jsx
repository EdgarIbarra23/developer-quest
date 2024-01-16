import { Autocomplete, List, ListItemButton, ListItemText, ListSubheader, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import Data from '../Helpers/Data'

const ViewItems = ({ data, technologies, listTechnology, text }) => {

    console.log(technologies)

    return (
        <>
            <div className='flex justify-center py-6'>
                <div className='flex justify-center items-start gap-10 max-[767px]:flex-col max-[767px]:items-center max-[1279px]:flex-col max-[1279px]:items-center'>
                    <div className='w-[15rem] max-[767px]:w-full max-[767px]:flex max-[767px]:justify-center max-[767px]:items-center'>

                        <div className="hidden max-[767px]:block max-[1279px]:block max-[1279px]:items-center ">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listTechnology.map(listTechnology => listTechnology.name)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label={text} />}
                            />
                        </div>

                        <div className="max-[767px]:hidden bg-[#242F40] text-white max-[1279px]:hidden">
                            <List
                                component="nav"
                                subheader={
                                    <ListSubheader
                                        component="div"
                                        style={{
                                            backgroundColor: '#242F40',
                                            color: 'white',
                                            fontSize: '30px',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            adding: '10px 0px'
                                        }}>
                                        {text}
                                    </ListSubheader>
                                }
                            />

                            {
                                listTechnology.map(listTechnology => {
                                    return (
                                        <ListItemButton
                                            component="a"
                                            key={listTechnology.name}
                                            style={{ border: '1px solid black' }}>
                                            <ListItemText
                                                primary={listTechnology.name} />
                                        </ListItemButton>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-[55rem] max-[767px]:w-full max-[1279px]:w-full">
                        <div className="flex flex-wrap justify-start gap-5 max-[767px]:flex-col max-[1279px]:justify-center">
                            {
                                data.map((dataItem) => (
                                    dataItem.teaches.languages.length <= 0 ? null : (
                                        <Card
                                            key={dataItem.id}
                                            id={dataItem.id}
                                            logo={dataItem.logo}
                                            name={dataItem.name}
                                            idioma={dataItem.idioma}
                                            timeYoutube={dataItem.timeYoutube}
                                            technologies={text === 'Lenguajes' ? dataItem.teaches.languages : text === 'Frameworks' ? dataItem.teaches.frameworks : null}
                                        />
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const DeveloperQuestItems = () => {
    const { opcion } = useParams()

    const { data, languages, frameworks, queryLanguajes, ide } = Data()

    useEffect(() => {
        data
    }, [])

    return opcion === 'lenguajes'
        ? <>
            <ViewItems
                data={data}
                technologies={data.map(data => data.teaches.languages)}
                listTechnology={languages}
                text='Lenguajes'
            />
        </>

        : opcion === 'frameworks'
            ? <>
                <ViewItems
                    data={data}
                    technologies={data.map(data => data.teaches.frameworks)}
                    listTechnology={frameworks}
                    text='Frameworks'
                />
            </>

            : opcion === 'baseDatos'
                ? <>
                    {
                        data.map(data => {
                            return data.teaches.queryLanguajes.length <= 0 ? null : (
                                <Card
                                    key={data.id}
                                    id={data.id}
                                    logo={data.logo}
                                    name={data.name}
                                    idioma={data.idioma}
                                    timeYoutube={data.timeYoutube}
                                    technologies={data.teaches.queryLanguajes}
                                />
                            )
                        })
                    }
                </>

                : opcion === 'Ides'
                    ? <>
                        {
                            data.map(data => {
                                return data.teaches.ide.length <= 0 ? null : (
                                    <Card
                                        key={data.id}
                                        id={data.id}
                                        logo={data.logo}
                                        name={data.name}
                                        idioma={data.idioma}
                                        timeYoutube={data.timeYoutube}
                                        technologies={data.teaches.ide}
                                    />
                                )
                            })
                        }
                    </>

                    : null
}

export default DeveloperQuestItems
