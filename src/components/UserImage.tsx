import React from 'react';
import styles from '../styles/UserImage.module.scss';

export interface UserImageProps {
    source: string;
    label: string; 
}

function UserImage(props: UserImageProps) {
    return (
        <div>
            <img src={props.source}/>
            <h3 className={styles.label}>{props.label}</h3> 
        </div>
    )
}

export default UserImage;