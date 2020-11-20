import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import rlavus from './../images/rlavus.png';

const props: UserHeaderProps = {
    name: 'rlavus',
    slogan: 'Moan',
    avatar: 'https://cdn.discordapp.com/attachments/754826534694551712/778431443562397696/rlavus.jpg'
};

const abortion: UserImageProps = {
    source: rlavus,
    label: '#ProChoice'
};

const Rlavus = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={abortion.source} label={abortion.label}/>
            </div>
        </body>
    )
}

export default Rlavus;