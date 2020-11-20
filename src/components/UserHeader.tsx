import { User } from 'discord.js';
import React from 'react';

export interface UserHeaderProps {
    name: string;
    slogan: string;
    avatar: string; 
}

function UserHeader(props: UserHeaderProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.slogan}</h2>
        </div>
    )
}

export default UserHeader;