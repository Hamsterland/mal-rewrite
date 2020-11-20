import React from 'react'; 
import HomeButton from '../components/HomeButton';
import UserHeader, { UserHeaderProps } from '../components/UserHeader';
import UserImage, { UserImageProps } from '../components/UserImage';
import './../styles/User.css'

import squall from './../images/squall.png';

const props: UserHeaderProps = {
    name: 'Squall',
    slogan: 'Racist against the Chinese',
    avatar: 'https://cdn.discordapp.com/avatars/226618912320520192/ba8cdfbee624f24800226f420b65e2c6.png?size=128'
};

const english: UserImageProps = {
    source: squall,
    label: 'Squall speaks Japanese'
};

const Squall = () => {
    return (
        <body>
            <HomeButton/>
            <div className="container">
                <UserHeader name={props.name} slogan={props.slogan} avatar={props.avatar}/>
                <UserImage source={english.source} label={english.label}/>
            </div>
        </body>
    )
}

export default Squall;