import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/mytho.png';

const lolis: UserImageProps = {
    source: image,
    label: 'NeoDaza makes a big mistake'
}

const Mytho = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Mythologically</div><br/>
                <div className={styles.slogan}>White Nationalist</div><br/>
                <UserImage source={lolis.source} label={lolis.label}/>
            </div>
        </div>
    )
}

export default Mytho;