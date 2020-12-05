import React from 'react';
import HomeButton from '../components/HomeButton';
import styles from './../styles/User.module.scss';

const Uchuu = () => {
    return (
        <div>
            <HomeButton/>
            <div className={styles.container}>
                <div className={styles.username}>Sike you thought</div><br/>
            </div>
        </div>
    )
}

export default Uchuu;