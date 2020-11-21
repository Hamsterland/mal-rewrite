import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import mytho from './../images/mytho.png';

const props: UserHeaderProps = {
    name: 'Mytho',
    slogan: 'White Nationalist',
    avatar: 'https://cdn.discordapp.com/avatars/480092510505402380/109127498a5aa083743c3e07c4cfd4de.png?size=128'
}

const lolis: UserImageProps = {
    source: mytho,
    label: 'Mytho is on the FBI most-wanted list'
};

const Maddo = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={lolis.source} label={lolis.label}/>
            </div>
        </body>
    )
}

export default Maddo;