import React from 'react';
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css';

import arden from './../images/arden.png';

const props: UserHeaderProps = {
    name: 'Arden',
    slogan: 'Tested uwu positive',
    avatar: 'https://cdn.discordapp.com/avatars/375573674306306050/c9af9a85ecc14c036ece1fd3d1403e22.png?size=128'
};

const recommendation: UserImageProps = {
    source: arden,
    label: 'Arden has concerning recommendations'
};

const Arden = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={recommendation.source} label={recommendation.label}/>
            </div>
        </body>
    )
}

export default Arden;