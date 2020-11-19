import React from 'react';
import { Link } from 'react-router-dom';

interface UserButtonProps {
    name: string;
    avatar: string;
}

function UserButton(props: UserButtonProps) {
    return (
        <Link to={"/" + props.name}>
            <img src={props.avatar} alt={props.name}/>
        </Link>
    )
} 

export default UserButton;
