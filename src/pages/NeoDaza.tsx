import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/neodaza.png';
import image2 from '../images/neodaza2.png';

const girl: UserImageProps = {
    source: image,
    label: 'NeoDaza makes a big mistake'
}

const shota: UserImageProps = {
    source: image2,
    label: 'NeoDaza, like most rewriters, is a pedophile'
}

const NoeDaza = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>NeoDaza</div><br/>
                <div className={styles.slogan}>Waifu Material</div><br/>
                <UserImage source={girl.source} label={girl.label}/>
                <UserImage source={shota.source} label={shota.label}/>
            </div>
        </div>
    )
}

export default NoeDaza;