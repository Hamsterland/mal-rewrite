import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import neodaza from './../images/neodaza.png';
import neodaza2 from './../images/neodaza2.png';

const props: UserHeaderProps = {
    name: 'NeoDaza',
    slogan: 'Waifu material',
    avatar: 'https://cdn.discordapp.com/avatars/718874307316678698/e73b36e0444a829c92d6dbb7a42905ae.png?size=128'
};

const girl: UserImageProps = {
    source: neodaza,
    label: 'NeoDaza makes a big mistake'
};

const shota: UserImageProps = {
    source: neodaza2,
    label: 'NeoDaza, like most Rewriters, is a pedophile'
};

const NeoDaza = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={girl.source} label={girl.label}/>
                <UserImage source={shota.source} label={shota.label}/>
            </div>
        </body>
    )
}

export default NeoDaza;