import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DeveloperQuestLead from './Pages/DeveloperQuestLead'
import DeveloperQuestPerfil from './Pages/DeveloperQuestPerfil'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<DeveloperQuestLead/>}></Route>
                <Route path='perfil/:perfilId' element={<DeveloperQuestPerfil/>}></Route>
                <Route path='/*' element={<DeveloperQuestLead/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App