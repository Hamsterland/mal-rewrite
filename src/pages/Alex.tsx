import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import alex from './../images/alex.png';

const props: UserHeaderProps = {
    name: 'Alex',
    slogan: 'Life',
    avatar: 'https://cdn.discordapp.com/avatars/343201768668266496/a3f7064bbd05fd762817c19cc43ed416.png?size=128'
};

const shutup: UserImageProps = {
    source: alex,
    label: 'Alex has something to say to pedophiles'
};

const Alex = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={shutup.source} label={shutup.label}/>
            </div>
        </body>
    )
}

export default Alex;