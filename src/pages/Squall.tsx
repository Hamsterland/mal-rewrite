import React from 'react'; 
import UserHeader from '../components/UserHeader';
import './../styles/Squall.css'

interface UserProps {
    name: string; 
}

const Squall = () => {
    return (
        <body>
            <div className="user-header">
                <UserHeader name="Squall" slogan="I hate anime" avatar=""/>
            </div>
        </body>
    )
}

export default Squall;