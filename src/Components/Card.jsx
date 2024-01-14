import React from 'react'
import Facebook from '../assets/SocialNetworks/Facebook.webp'
import Instagram from '../assets/SocialNetworks/Instagram.webp'
import TikTok from '../assets/SocialNetworks/Tiktok.webp'
import Twitch from '../assets/SocialNetworks/Twitch.webp'
import Twitter from '../assets/SocialNetworks/Twitter.webp'
import Youtube from '../assets/SocialNetworks/YouTube.webp'
import { Link } from 'react-router-dom'

export const SocialLink = ({ url, image, alt }) => {
    return url === '' ? null : (
        <a href={url} target='_blank'>
            <img src={image} alt={alt} className='w-[50px]' />
        </a>
    )
}

const Card = ({ data }) => {
    const {id, logo, name, idioma, timeYoutube, socialNetworks } = data;

    return (
        <div className="bg-[#E5E5E5] rounded-[16px] w-[26rem] h-[17rem] my-2 px-2 shadow-xl max-[767px]:w-[340px] max-[767px]:px-0 max-[1023px]:w-[340px] max-[1280px]:w-[400px]">

            <div className="flex justify-start items-center h-[10rem]">
                <div className="flex justify-center items-center w-[50%] h-full">
                    <img src={logo} alt={name} className='rounded-full w-[7rem] shadow-xl max-[767px]:w-[5rem]'/>
                </div>

                <div className="flex flex-col flex-wrap w-full">
                    <h3 className={name.length > 12 ? 'text-[25px] font-bold leading-1' : 'text-[35px] font-bold leading-1'}>{name}</h3>
                    <p className='text-[15px] font-bold'>Idioma: {idioma}</p>
                    <p className='text-[15px] font-bold'>Tiempo en Youtube: {timeYoutube}</p>
                </div>
            </div>

            <div className="flex justify-start items-center gap-2 px-3 w-full">

                <SocialLink
                    url={socialNetworks.youtube}
                    image={Youtube}
                    alt='YouTube'
                />

                <SocialLink
                    url={socialNetworks.facebook}
                    image={Facebook}
                    alt='Facebook'
                />

                <SocialLink
                    url={socialNetworks.twitter}
                    image={Twitter}
                    alt='Twitter'
                />

                <SocialLink
                    url={socialNetworks.twitch}
                    image={Twitch}
                    alt='Twitch'
                />

                <SocialLink
                    url={socialNetworks.instagram}
                    image={Instagram}
                    alt='Instagram'
                />

                <SocialLink
                    url={socialNetworks.tiktok}
                    image={TikTok}
                    alt='Tiktok'
                />
            </div>

            <div className="flex justify-end items-center w-full px-5 py-1">
                <Link to={`/perfil/${id}`}>
                    <button className='border-black border-[1px] rounded-[16px] bg-[#242F40] text-white px-6 py-2 text-[20px] font-bold'>Ver más</button>
                </Link>
            </div>
        </div>
    )
}

export default Card