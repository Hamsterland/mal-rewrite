import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/squall.png';

const japanese: UserImageProps = {
    source: image,
    label: 'Squall speaks Japanese'
}

const Squall = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Squall</div><br/>
                <div className={styles.slogan}>Racist against the Chinese</div><br/>
                <UserImage source={japanese.source} label={japanese.label}/>
            </div>
        </div>
    )
}

export default Squall;