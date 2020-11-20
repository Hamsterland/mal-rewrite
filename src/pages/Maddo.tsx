import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import maddo from './../images/maddo.png';

const props: UserHeaderProps = {
    name: 'Maddo',
    slogan: 'Authentic Cheshire',
    avatar: 'https://cdn.discordapp.com/avatars/711211838305599538/0c79ce9727439b7212223f884283d57d.png?size=128'
};

const cock: UserImageProps = {
    source: maddo,
    label: 'Maddo likes badminton, right?'
};

const Maddo = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={cock.source} label={cock.label}/>
            </div>
        </body>
    )
}

export default Maddo;