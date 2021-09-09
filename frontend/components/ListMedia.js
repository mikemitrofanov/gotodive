import mailIcon from '../public/images/footer/icons/mailIcon.png'
import mapIcon from '../public/images/footer/icons/mapIcon.png'
import TelIcon from '../public/images/footer/icons/TelIcon.png'
import facebookIcon from '../public/images/footer/icons/facebookIcon.png'


import viberIcon from '../public/images/footer/icons/viberIcon.png'
import wtsupIcon from '../public/images/footer/icons/wtsupIcon.png'
import instaIcon from '../public/images/footer/icons/instaIcon.png'
import telegramIcon from '../public/images/footer/icons/telegramIcon.png'

import style from '../styles/footerStyle.module.css';

import Image from 'next/image'


export default function ListMedia() {
    return (
        <div className={`flex justify-between`}>
            <div className='text-white'>
                <h1 className={`mt-7`}>Contact Us</h1>
                <ul>
                    <div className={`${style.info_menu}`}>
                        <Image src={mapIcon} alt='map_icon' />
                        &nbsp;
                        999, Моя Улица, Хорватия     
                    </div>
                    <div className={`${style.info_menu}`}>
                    <Image src={TelIcon} alt='map_icon' />
                    &nbsp;
                        270-177-6026, 275-198-7978
                    </div>
                    <div className={`${style.info_menu}`}>
                    <Image src={facebookIcon} alt='map_icon'/>
                    &nbsp;
                        @GotoDive
                    </div>
                    <div className={`${style.info_menu}`}>
                    <Image src={mailIcon} alt='map_icon'/>
                    &nbsp;
                        GotoDive@gmail.com
                    </div>
                </ul>
            </div>
            <div className='text-white'>
                <div>Categories</div>
                <ul>
                    <div>
                        Дайвинг
                    </div>
                    <div>
                        Обучение дайвингу
                    </div>
                    <div>
                        Стань ДАЙВ ПРО
                    </div>
                    <div>
                         Экскурсии
                    </div>
                </ul>
            </div>
            <div className='text-white'>
                <div>Social</div>
                <ul>
                <div className={`${style.info_menu}`}>
                        <Image src={instaIcon} alt='map_icon'/>
                        &nbsp;
                        @GotoDive
                    </div>
                    <div className={`${style.info_menu}`}>
                        <Image src={telegramIcon} alt='map_icon'/>
                        &nbsp;
                        @GotoDive
                    </div>
                    <div className={`${style.info_menu}`}>
                        <Image src={wtsupIcon} alt='map_icon'/>
                        &nbsp;
                        @GotoDive
                    </div>
                    <div className={`${style.info_menu}`}>
                        <Image src={viberIcon} alt='map_icon'/>
                        &nbsp;
                        @GotoDive
                    </div>
                </ul>
            </div>
        </div>
    )
}