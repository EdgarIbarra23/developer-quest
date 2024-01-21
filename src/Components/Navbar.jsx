import React, { useState } from 'react'
import { Checkbox, TextField } from '@mui/material';
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({handleValueTextField, textfield ,setTextfield}) => {
    const [checkState, setCheckState] = useState(false)

    const handleChange = () => {
        setCheckState(!checkState);
    }

    return (
        <div className="bg-[#242F40] text-white px-[20px] py-[10px] max-[767px]:px-0">
            <div className="flex justify-between items-center max-[767px]:flex-col">

                <div className="flex justify-center items-center max-[767px]:gap-[20px]">
                    <div className="hidden max-[767px]:block">
                        <Checkbox
                            onClick={handleChange}
                            icon={<FiMenu className='text-[50px] text-white font-bold' />}
                            checkedIcon={<IoClose className='text-[50px] text-white font-bold' />}
                        />
                    </div>
                    <Link to='/'>
                        <h1 className='text-[36px] font-semibold max-[767px]:text-[32px] max-[767px]:w-full min-[767px]:text-[20px] min-[1024px]:text-[36px]'>Developer Quest</h1>
                    </Link>
                </div>

                {/* Barra de Busqueda: solo se muestra para modo celular */}
                {
                    checkState ? null : (
                        <form className='hidden max-[767px]:block max-[767px]:pt-2' onSubmit={handleValueTextField}>
                            <TextField
                                type='text'
                                variant="outlined"
                                className='rounded bg-white w-[230px] max-[767px]:w-[300px]'
                                value={textfield}
                                onChange={(e) => setTextfield(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <CiSearch
                                            className='text-[40px]'
                                        />
                                    ),
                                }}
                            />
                        </form>
                    )
                }

                <div className="flex justify-center items-center gap-[25px] max-[767px]:flex-col max-[767px]:w-full min-[767px]:gap-[15px] min-[1024px]:gap-[25px]">

                    {/* Enlaces: son los que solo se muestran cuando no hay en modo celular */}
                    <div className="flex gap-10 font-semibold text-lg max-[767px]:hidden min-[767px]:gap-5 min-[1024px]:gap-8">
                        <NavLink to='/eleccion/lenguajes'>
                            <button>
                                Lenguajes
                            </button>
                        </NavLink>

                        <NavLink to='/eleccion/frameworks'>
                            <button>
                                Frameworks
                            </button>
                        </NavLink>

                        <NavLink to='/eleccion/baseDatos'>
                            <button>
                                Base de Datos
                            </button>
                        </NavLink>

                        <NavLink to='/eleccion/Ides'>
                            <button>
                                IDEs
                            </button>
                        </NavLink>
                    </div>

                    {/* Enlaces: la misma que la anterior, cosa que cambia es que solo muestra en celular y hace la accion de aparecer y desaparecer al dar click al menu */}
                    {
                        checkState && (
                            <div className="flex font-semibold max-[767px]:text-[23px] max-[767px]:flex-col max-[767px]:w-full max-[767px]:gap-0 max-[767px]:pt-5 min-[767px]:hidden min-[1024px]:hidden min-[1279px]:hidden min-[1280px]:hidden">
                                <NavLink to='/eleccion/lenguajes'>
                                    <button
                                        className='max-[767px]:border-t-[2px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full'>
                                        Lenguajes
                                    </button>
                                </NavLink>

                                <NavLink to='/eleccion/frameworks'>
                                    <button
                                        className='max-[767px]:border-t-[1px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full'>
                                        Frameworks
                                    </button>
                                </NavLink>

                                <NavLink to='/eleccion/baseDatos'>
                                    <button
                                        className='max-[767px]:border-t-[1px] max-[767px]:border-b-[1px] max-[767px]:border-black max-[767px]:py-3 w-full'>
                                        Base de Datos
                                    </button>
                                </NavLink>

                                <NavLink to='/eleccion/Ides'>
                                    <button
                                        className='max-[767px]:border-t-[1px] max-[767px]:border-b-[2px] max-[767px]:border-black max-[767px]:py-3 w-full'>
                                        IDEs
                                    </button>
                                </NavLink>
                            </div>
                        )
                    }

                    {/* Barra de Busqueda: solo se muestra para modo que no son celular */}
                    <form className='max-[767px]:hidden' onSubmit={handleValueTextField}>
                        <TextField
                            type='text'
                            variant="outlined"
                            className='rounded bg-white w-[230px] min-[767px]:w-[200px] min-[1024px]:w-[200px] min-[1280px]:w-[230px]'
                            value={textfield}
                            onChange={(e) => setTextfield(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <CiSearch
                                        className='text-[40px]'
                                    />
                                ),
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar