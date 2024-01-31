import React from 'react'
import Linkedin from '../assets/SocialNetworks/Linkedin.webp'
import Twitter from '../assets/SocialNetworks/Twitter.webp'
import Threads from '../assets/SocialNetworks/Threads.webp'

const year = new Date().getFullYear()
const Footer = () => {

    return (
        <div className="bg-[#242F40] text-white flex justify-center items-center">
            <div className="flex justify-evenly items-center py-[15px] max-[767px]:flex-col">

                <div className="w-[60%] px-[10px] max-[767px]:w-full max-[767px]:py-5 max-[767px]:px-[15px] max-[1023px]:w-[70%]">
                    <p className='text-[25px] font-bold leading-[1.3] text-center max-[767px]:text-[28px] max-[1023px]:text-[20px] max-[1023px]:leading-[1.5]'>Si conoces a algún creador de contenido que aborde temas de programación y no esté incluido en nuestra lista, por favor, contáctame a través de mis redes sociales.</p>
                </div>

                <div className="flex flex-col justify-center items-center max-[767px]:w-full max-[767px]:py-2">
                    <h3 className='text-[20px] font-bold max-[767px]:hidden'>Redes Sociales:</h3>
                    <div className="flex gap-3">
                        <a href="https://twitter.com/FerchoCodeG" target='_blank'>
                            <img src={Twitter} alt="Twitter" className='w-[50px] max-[767px]:w-[90px]'/>
                        </a>
                        <a href="https://www.threads.net/@edgaribarra_dev?hl=es-la" target='_blank'>
                            <img src={Threads} alt="Threads" className='w-[50px] max-[767px]:w-[90px]'/>
                        </a>
                        <a href="https://www.linkedin.com/in/edgar-fernando-ibarra-cabanzo-23092004c/" target='_blank'>
                            <img src={Linkedin} alt="Linkedin" className='w-[50px] max-[767px]:w-[90px]'/>
                        </a>
                    </div>
                    <p className='font-bold text-[20px] max-[767px]:text-[30px] max-[767px]:py-[10px]'>© {year} - Edgar Ibarra</p>
                </div>
            </div>
        </div>
    )
}

export default Footer