import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/yuun.png';

const naughty: UserImageProps = {
    source: image,
    label: 'Yuun is Santa Claus\' little helper'
}

const Yuun = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Yuun</div><br/>
                <div className={styles.slogan}>God is clinically depressed</div><br/>
                <UserImage source={naughty.source} label={naughty.label}/>
            </div>
        </div>
    )
}

export default Yuun;