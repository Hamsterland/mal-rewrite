import React from 'react';
import HomeButton from '../components/HomeButton';
import UserImage, { UserImageProps } from '../components/UserImage';
import styles from './../styles/User.module.scss';
import image from '../images/tofu.png';
import image2 from '../images/tofu2.png';

const harden: UserImageProps = {
    source: image,
    label: 'Tofu reveals his desires'
}

const selfcest: UserImageProps = {
    source: image2,
    label: 'Tofu enjoys selfcest'
}

const Tofu = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Tofu</div><br/>
                <div className={styles.slogan}>This says a lot about our society</div><br/>
                <UserImage source={harden.source} label={harden.label}/>
                <UserImage source={selfcest.source} label={selfcest.label}/>
            </div>
        </div>
    )
}

export default Tofu;