import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DeveloperQuestLead from './Pages/DeveloperQuestLead'
import DeveloperQuestPerfil from './Pages/DeveloperQuestPerfil'
import DeveloperQuestItems from './Pages/DeveloperQuestItems'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<DeveloperQuestLead/>} />
                <Route path='eleccion/:opcion' element={<DeveloperQuestItems/>} />
                <Route path='perfil/:perfilId' element={<DeveloperQuestPerfil/>} />
                <Route path='*' element={<Navigate to='/' />} />
                {/* <Route path='/busqueda/**' element={<Navigate to='/'/>} /> */}
            </Routes>
            <Footer/>
        </>
    )
}

export default App