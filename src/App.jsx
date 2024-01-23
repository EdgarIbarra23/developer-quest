import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DeveloperQuestLead from './Pages/DeveloperQuestLead'
import DeveloperQuestPerfil from './Pages/DeveloperQuestPerfil'
import DeveloperQuestItems from './Pages/DeveloperQuestItems'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {
    const [textfield, setTextfield] = useState("");
    const [stateSearch, setStateSearch] = useState(false)
    const navigate = useNavigate();

    const handleValueTextField = (e) => {
        e.preventDefault();
        setTextfield(textfield);
        textfield === "" ? setStateSearch(true) : setStateSearch(false);
        navigate('/')
    }

    return (
        <>
            <Navbar
                handleValueTextField={handleValueTextField}
                textfield={textfield}
                setTextfield={setTextfield}
                setStateSearch={setStateSearch}
            />
            <Routes>
                <Route 
                    path='/' 
                    element={<DeveloperQuestLead 
                                textfield={textfield} 
                                stateSearch={stateSearch}/>} />

                <Route 
                    path='eleccion/:opcion' 
                    element={<DeveloperQuestItems/>} />

                <Route 
                    path='perfil/:perfilId' 
                    element={<DeveloperQuestPerfil/>} />

                <Route 
                    path='*' 
                    element={<Navigate to='/' />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App