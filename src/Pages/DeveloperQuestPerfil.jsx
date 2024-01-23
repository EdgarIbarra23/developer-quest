import React, { useEffect } from 'react'
import Facebook from '../assets/SocialNetworks/Facebook.webp'
import Instagram from '../assets/SocialNetworks/Instagram.webp'
import TikTok from '../assets/SocialNetworks/Tiktok.webp'
import Twitch from '../assets/SocialNetworks/Twitch.webp'
import Twitter from '../assets/SocialNetworks/Twitter.webp'
import Youtube from '../assets/SocialNetworks/YouTube.webp'
import { Link, useParams } from 'react-router-dom'
import { SocialLink } from '../Components/Card'
import { AccordionList } from '../Components/AccordionList'
import Data from '../Helpers/Data'

export const RealizationProjects = ({ text, state }) => {
    return (
        <h3 className='text-[20px] font-bold max-[767px]:text-[21px]'>{text}: {state ? '✔' : '❌'}</h3>
    )
}

const DeveloperQuestPerfil = () => {
    const { perfilId } = useParams()
    const { data } = Data()

    const perfilData = data.find((perfil) => perfil.id === parseInt(perfilId));

    const moreUsers = data.filter((usuario) => usuario.id !== parseInt(perfilId));
    const shuffledUsers = moreUsers.sort(() => Math.random() - 0.5);
    const fiveUsers = shuffledUsers.slice(0, 5);

    useEffect(() => {
        perfilData
    }, [])

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-evenly w-full py-10 max-[767px]:pt-3 max-[767px]:pb-10">

                    <div className="w-[40rem] max-[767px]:w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center">
                        <div className="flex justify-start items-center gap-5 px-5 py-4 max-[767px]:flex-col">
                            
                            <div className="w-[20rem] flex justify-center items-center max-[767px]:w-[18rem]">
                                <img src={perfilData.logo} alt={perfilData.name} className='rounded-[20px] w-[15rem]' />
                            </div>

                            <div className="flex flex-col justify-start gap-4 w-full max-[767px]:justify-center max-[767px]:items-center">

                                <div className="flex flex-col gap-1 max-[767px]:w-[19rem]">
                                    <h1 className='text-[30px] font-bold max-[767px]:text-[33px] max-[767px]:pb-4'>{perfilData.name}</h1>
                                    <p className='text-[15px] font-bold max-[767px]:text-[17px]'>Idioma: {perfilData.idioma}</p>
                                    <p className='text-[15px] font-bold max-[767px]:text-[17px]'>Tiempo en Youtube: {perfilData.timeYoutube}</p>
                                </div>

                                <div className="">
                                    <RealizationProjects
                                        text='Realiza Proyectos FrontEnd'
                                        state={perfilData.teaches.projectsFrontEnd}
                                    />
                                    <RealizationProjects
                                        text='Realiza Proyectos FullStack'
                                        state={perfilData.teaches.projectsFullStack}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-start gap-5 px-5 py-4 max-[767px]:flex-col-reverse max-[767px]:pl-5">
                            
                            <div className="flex flex-col w-[13rem]">
                                <h3 className='text-[25px] font-bold w-full py-2 px-2'>Redes Sociales:</h3>
                                <div className="flex justify-start items-center flex-wrap gap-2 px-2">
                                    <SocialLink
                                        url={perfilData.socialNetworks.youtube}
                                        image={Youtube}
                                        alt='YouTube'
                                    />

                                    <SocialLink
                                        url={perfilData.socialNetworks.facebook}
                                        image={Facebook}
                                        alt='Facebook'
                                    />

                                    <SocialLink
                                        url={perfilData.socialNetworks.twitter}
                                        image={Twitter}
                                        alt='Twitter'
                                    />

                                    <SocialLink
                                        url={perfilData.socialNetworks.twitch}
                                        image={Twitch}
                                        alt='Twitch'
                                    />

                                    <SocialLink
                                        url={perfilData.socialNetworks.instagram}
                                        image={Instagram}
                                        alt='Instagram'
                                    />

                                    <SocialLink
                                        url={perfilData.socialNetworks.tiktok}
                                        image={TikTok}
                                        alt='Tiktok'
                                    />
                                </div>
                            </div>

                            <div className='w-[25rem] max-[767px]:w-[20rem]'>
                                <AccordionList
                                    expandedText='panel1'
                                    title='Lenguajes'
                                    contents={perfilData.teaches.languages}
                                />

                                <AccordionList
                                    expandedText='panel2'
                                    title='Frameworks'
                                    contents={perfilData.teaches.frameworks}
                                />

                                <AccordionList
                                    expandedText='panel3'
                                    title='Base de Datos'
                                    contents={perfilData.teaches.queryLanguajes}
                                />

                                <AccordionList
                                    expandedText='panel4'
                                    title='IDEs'
                                    contents={perfilData.teaches.ide}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[350px] max-[767px]:hidden max-[1023px]:hidden">
                        {
                            fiveUsers.map(user =>
                                <Link 
                                    key={user.id}
                                    to={`/perfil/${user.id}`} 
                                    className='flex justify-start items-center w-full h-[80px] py-2 px-2 my-2 gap-3 rounded-[15px] hover:bg-[#E5E5E5]'>
                                    <div className="w-[60px]">
                                        <img 
                                            src={user.logo} 
                                            alt={user.name} 
                                            className='rounded-full' />
                                    </div>
                                    <h2 className='text-[20px] font-bold'>{user.name}</h2>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeveloperQuestPerfil