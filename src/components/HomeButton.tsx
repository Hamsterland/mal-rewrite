import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/HomeButton.module.scss';

function HomeButton() {
    return (
        <Link to="/">
            <h4 className={styles.homeButton}>Home</h4>
        </Link>
    )
}

export default HomeButton;