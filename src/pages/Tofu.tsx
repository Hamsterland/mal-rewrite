import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import tofu from './../images/tofu.png';

const props: UserHeaderProps = {
    name: 'Tofu',
    slogan: 'This says a lot about our society',
    avatar: 'https://cdn.discordapp.com/avatars/249855890381996032/eedad0001a504773ec284c46e13f62be.png?size=128'
};

const desires: UserImageProps = {
    source: tofu,
    label: 'Tofu reveals his desires'
};

const Tofu = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={desires.source} label={desires.label}/>
            </div>
        </body>
    )
}

export default Tofu;