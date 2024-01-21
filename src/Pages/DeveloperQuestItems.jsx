import { Autocomplete, List, ListItemButton, ListItemText, ListSubheader, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import Data from '../Helpers/Data'

const ViewItems = ({ data, listTechnology, text, statusChange }) => {

    const [selectTecnology, setSelectTecnology] = useState('');
    const [stateClick, setStateClick] = useState(statusChange)

    useEffect(() => {
        setStateClick(statusChange)
    }, [text])

    const handleTecnology = (e) => {
        setSelectTecnology(e.target.innerText);
        setStateClick(true)
    }

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
                                onChange={handleTecnology}
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
                                            style={{ border: '1px solid black' }}
                                            onClick={handleTecnology}>
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
                                data.map((dataItem) => {
                                    let tecnology

                                    if (text === 'Lenguajes') {
                                        tecnology = dataItem.teaches.languages;
                                    } else if (text === 'Frameworks') {
                                        tecnology = dataItem.teaches.frameworks;
                                    } else if (text === 'Base de Datos') {
                                        tecnology = dataItem.teaches.queryLanguajes;
                                    } else if (text === 'IDEs') {
                                        tecnology = dataItem.teaches.ide;
                                    }

                                    return (
                                        stateClick
                                            ? (
                                                tecnology && tecnology.length > 0 && (
                                                    tecnology.map((tech) => {
                                                        if (tech.name === selectTecnology) {
                                                            return (
                                                                <Card
                                                                    key={dataItem.id}
                                                                    id={dataItem.id}
                                                                    logo={dataItem.logo}
                                                                    name={dataItem.name}
                                                                    idioma={dataItem.idioma}
                                                                    timeYoutube={dataItem.timeYoutube}
                                                                    technologies={tecnology}
                                                                />
                                                            );
                                                        } else if (selectTecnology === undefined){
                                                            setStateClick(false)
                                                        }
                                                        return null;
                                                    })
                                                )
                                            )

                                            : (
                                                tecnology && tecnology.length > 0 && (
                                                    <Card
                                                        key={dataItem.id}
                                                        id={dataItem.id}
                                                        logo={dataItem.logo}
                                                        name={dataItem.name}
                                                        idioma={dataItem.idioma}
                                                        timeYoutube={dataItem.timeYoutube}
                                                        technologies={tecnology}
                                                    />)
                                            )
                                    );
                                })
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
        data,
            languages,
            frameworks,
            queryLanguajes,
            ide
    }, [])

    return opcion === 'lenguajes'
        ? <>
            <ViewItems
                data={data}
                listTechnology={languages}
                text='Lenguajes'
                statusChange= {false}
            />
        </>

        : opcion === 'frameworks'
            ? <>
                <ViewItems
                    data={data}
                    listTechnology={frameworks}
                    text='Frameworks'
                    statusChange={false}
                />
            </>

            : opcion === 'baseDatos'
                ? <>
                    <ViewItems
                        data={data}
                        listTechnology={queryLanguajes}
                        text='Base de Datos'
                        statusChange={false}
                    />
                </>

                : opcion === 'Ides'
                    ? <>
                        <ViewItems
                            data={data}
                            listTechnology={ide}
                            text='IDEs'
                            statusChange={false}
                        />
                    </>

                    : null
}

export default DeveloperQuestItems
