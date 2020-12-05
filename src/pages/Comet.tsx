import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/comet.png';

const sevenYearOld: UserImageProps = {
    source: image,
    label: 'Comet is a target for NeoDaza'
}

const Comet = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Comet</div><br/>
                <div className={styles.slogan}>I relate to Kaneki</div><br/>
                <UserImage source={sevenYearOld.source} label={sevenYearOld.label}/>
            </div>
        </div>
    )
}

export default Comet;