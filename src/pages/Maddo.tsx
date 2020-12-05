import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/maddo.png';

const badminton: UserImageProps = {
    source: image,
    label: 'Maddo likes badminton, right?'
}

const Maddo = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Maddo</div><br/>
                <div className={styles.slogan}>Authentic Cheshire</div><br/>
                <UserImage source={badminton.source} label={badminton.label}/>
            </div>
        </div>
    )
}

export default Maddo;