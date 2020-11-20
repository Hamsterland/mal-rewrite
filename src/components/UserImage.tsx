import React from 'react';

export interface UserImageProps {
    source: string;
    label: string; 
}

function UserImage(props: UserImageProps) {
    return (
        <div>
            <img src={props.source}/>
            <h3>{props.label}</h3> 
        </div>
    )
}

export default UserImage;