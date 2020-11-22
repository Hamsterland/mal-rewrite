import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader from '../components/UserHeader';
import UserImageCollection from '../components/UserImageCollection';
import User from '../models/User';
import './../styles/User.css';

import imageDesires from './../images/tofu.png';
import imageSelfcest from './../images/tofu2.png';

export const TofuData: User = {
    username: 'Tofu',
    slogan: 'This says a lot about our society',
    avatar: 'https://cdn.discordapp.com/avatars/249855890381996032/eedad0001a504773ec284c46e13f62be.png?size=128',
    images: [ 
        { image: imageDesires, label: 'Tofu reveals his desires'},
        { image: imageSelfcest, label: 'Tofu regularly enjoys selfcest' } 
    ]
}

const Tofu = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={TofuData.username} slogan={TofuData.slogan} avatar={TofuData.avatar}/>
                <UserImageCollection images={TofuData.images}/>
            </div>
        </body>
    )
}

export default Tofu;