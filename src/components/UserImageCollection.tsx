import React from 'react';
import Image from '../models/Image';
import UserImage from './UserImage';

interface UserImageCollectionProps {
    images: Image[]
}

function UserImageCollection(props: UserImageCollectionProps) {
    return (
        <div>
            {props.images.map(({ image, label }) => (
                <UserImage key={image} source={image} label={label} />
            ))}
        </div>
    )
}

export default UserImageCollection;