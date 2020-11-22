import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader from '../components/UserHeader';
import UserImageCollection from '../components/UserImageCollection';
import User from '../models/User';
import './../styles/User.css';

import imageNaughty from './../images/yuun.png';

export const YuunData: User = {
    username: 'Yuun',
    slogan: '',
    avatar: 'https://cdn.discordapp.com/avatars/630427600220717067/4aa2531278838847649b452acce6097e.png?size=128',
    images: [ { image: imageNaughty, label: 'Yuun is Santa Claus\' Helper'} ]
}

const Yuun = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={YuunData.username} slogan={YuunData.slogan} avatar={YuunData.avatar}/>
                <UserImageCollection images={YuunData.images}/>
            </div>
        </body>
    )
}

export default Yuun;