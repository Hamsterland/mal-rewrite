import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/rlavus.png';

const Klee: UserImageProps = {
    source: image,
    label: 'Rlavus is #ProChoice'
}

const Rlavus = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Rlavus</div><br/>
                <div className={styles.slogan}>Moan</div><br/>
                <UserImage source={Klee.source} label={Klee.label}/>
            </div>
        </div>
    )
}

export default Rlavus;