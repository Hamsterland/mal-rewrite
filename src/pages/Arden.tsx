import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/arden.png';

const pedophillia: UserImageProps = {
    source: image,
    label: 'Arden has concerning recommendations'
}

const Arden = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Arden</div><br/>
                <div className={styles.slogan}>Tested uwu positive</div><br/>
                <UserImage source={pedophillia.source} label={pedophillia.label}/>
            </div>
        </div>
    )
}

export default Arden;