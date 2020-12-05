import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/alex.png';

const lolicons: UserImageProps = {
    source: image,
    label: 'Alex has something to say to pedophiles'
}

const Alex = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Alex</div><br/>
                <div className={styles.slogan}>Life</div><br/>
                <UserImage source={lolicons.source} label={lolicons.label}/>
            </div>
        </div>
    )
}

export default Alex;