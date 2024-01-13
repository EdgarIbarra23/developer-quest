import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { Data } from '../Helpers/Data'

const DeveloperQuestLead = () => {
    const { data } = Data()

    useEffect(() => {
        data
    },[])

    return (
        <>
            <Navbar/>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex gap-5 justify-center items-center flex-wrap py-6">
                    {
                        data.map(data => {
                            return (
                                <Card
                                    key = {data.id}
                                    data = {data}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DeveloperQuestLead
