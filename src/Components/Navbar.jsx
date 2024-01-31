import React, { useEffect, useState } from 'react'
import { Alert, Autocomplete, Checkbox, TextField, Toolbar } from '@mui/material';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Data from '../Helpers/Data';

const Navbar = ({ handleValueTextField, textfield, setTextfield }) => {
    const [checkState, setCheckState] = useState(false)

    const { languages, frameworks, queryLanguajes, ide } = Data();
    const tecnologies = [languages, frameworks, queryLanguajes, ide];
    const tecnology = tecnologies.flatMap(tecno => tecno.map(tec => tec.name))

    const navigate = useNavigate()

    const handleChange = () => {
        setCheckState(!checkState);
    }

    useEffect(() => {
        languages,
            frameworks,
            queryLanguajes,
            ide,
            tecnology
    }, [])

    return (
        <>
            <div className="bg-[#242F40] text-white px-[20px] py-[10px] max-[767px]:px-0">
                <Toolbar id="back-to-top-anchor" className="flex justify-between items-center max-[767px]:flex-col">
                    <div className="flex justify-center items-center max-[767px]:gap-[20px]">
                        <div className="hidden max-[767px]:block">
                            <Checkbox
                                onClick={handleChange}
                                icon={<FiMenu className="text-[50px] text-white font-bold" />}
                                checkedIcon={
                                    <IoClose className="text-[50px] text-white font-bold" />
                                }
                            />
                        </div>
                        <Link to="/">
                            <h1 className="text-[36px] font-semibold max-[767px]:text-[31px] max-[767px]:w-full min-[767px]:text-[20px] min-[1024px]:text-[36px]">
                                Developer Quest
                            </h1>
                        </Link>
                    </div>
                    {checkState ? null : (
                        <form
                            className="hidden max-[767px]:block max-[767px]:pt-2"
                            onSubmit={handleValueTextField}
                        >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={tecnology}
                                onChange={(e, newValue) => setTextfield(newValue)}
                                value={tecnology.includes(textfield) ? textfield : null}
                                sx={{ width: 300 }}
                                className="rounded bg-white w-[230px] min-[767px]:w-[200px] min-[1024px]:w-[200px] min-[1280px]:w-[230px]"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Seleccione la Tecnologia"
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                    />
                                )}
                            />
                        </form>
                    )}

                    <div className="flex justify-center items-center gap-[25px] max-[767px]:flex-col max-[767px]:w-full min-[767px]:gap-[15px] min-[1024px]:gap-[25px]">
                        <div className="flex gap-10 font-semibold text-lg max-[767px]:hidden min-[767px]:gap-5 min-[1024px]:gap-8">
                            <NavLink to="/eleccion/lenguajes">
                                <button>Lenguajes</button>
                            </NavLink>

                            <NavLink to="/eleccion/frameworks">
                                <button>Frameworks</button>
                            </NavLink>

                            <NavLink to="/eleccion/baseDatos">
                                <button>Base de Datos</button>
                            </NavLink>

                            <NavLink to="/eleccion/Ides">
                                <button>IDEs</button>
                            </NavLink>
                        </div>
                        {checkState && (
                            <div className="flex font-semibold max-[767px]:text-[23px] max-[767px]:flex-col max-[767px]:w-full max-[767px]:gap-0 max-[767px]:pt-5 min-[767px]:hidden min-[1024px]:hidden min-[1279px]:hidden min-[1280px]:hidden">
                                <NavLink to="/eleccion/lenguajes">
                                    <button className="max-[767px]:border-t-[2px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full">
                                        Lenguajes
                                    </button>
                                </NavLink>

                                <NavLink to="/eleccion/frameworks">
                                    <button className="max-[767px]:border-t-[1px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full">
                                        Frameworks
                                    </button>
                                </NavLink>

                                <NavLink to="/eleccion/baseDatos">
                                    <button className="max-[767px]:border-t-[1px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full">
                                        Base de Datos
                                    </button>
                                </NavLink>

                                <NavLink to="/eleccion/Ides">
                                    <button className="max-[767px]:border-t-[1px] max-[767px]:border-b-[2px] max-[767px]:border-black max-[767px]:py-3 w-full">
                                        IDEs
                                    </button>
                                </NavLink>
                            </div>
                        )}
                        <form
                            className="max-[767px]:hidden"
                            onSubmit={handleValueTextField}
                        >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={tecnology}
                                onChange={(e, newValue) => setTextfield(newValue)}
                                value={tecnology.includes(textfield) ? textfield : null}
                                sx={{ width: 300 }}
                                className="rounded bg-white w-[230px] min-[767px]:w-[200px] min-[1024px]:w-[200px] min-[1280px]:w-[230px]"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Seleccione la Tecnologia"
                                        onClick={() => {
                                            textfield === "" ? null : null;
                                        }}
                                    />
                                )}
                            />
                        </form>
                    </div>
                </Toolbar>
            </div>
            <Alert in={open} className='w-full flex justify-center items-center'>
                <h4 className='text-[16px]'>
                    La información recopilada se actualizó por última vez el <strong>30/01/2024</strong>
                </h4>
            </Alert>
            
        </>
    );
}

export default Navbar