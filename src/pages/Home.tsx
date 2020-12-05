import React, { useEffect, useState } from 'react';
import UserButton from '../components/UserButton';
import User from '../models/User';
import { Icon } from '@iconify/react-with-api';

import background from './../images/background.png';
import styles from '../styles/Home.module.scss';

const discordLink = 'https://discord.gg/UsXvSUh7qu';
const githubLink = 'https://github.com/Hamsterland/mal-rewrite/';

const discordIcon = 'logos:discord';
const githubIcon = 'ant-design:github-filled';

const userIds: string[] = [
    // Squall
    '226618912320520192',

    // Tofu
    '249855890381996032',

    // Alex
    '343201768668266496',

    // Jeremy
    '754681236236140666',

    // Maddo
    '711211838305599538',

    // Arden
    '375573674306306050',

    // Neo
    '718874307316678698',

    // Mytho
    '480092510505402380',

    // Yuun
    '630427600220717067'
];

const Home = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const [isBusy, setBusy] = useState(true);

    useEffect(() => {
        setBusy(true);
        const fetchData = async() => {
            let users: User[] = [];
            for (const id of userIds) {
                const response = await fetch('https://api.codetabs.com/v1/proxy/?quest=http://hamsterland.herokuapp.com/api/users?id=' + id);
                const user: User = await response.json(); 
                users.push(user);
            }

            setUsers(users);
            setBusy(false);
        }

        fetchData();
    }, [])

    return (
        <div className="App">
            <div className={styles.title}>
                <div className={styles.header}>Hamsterland</div>
                <div className={styles.subheader}>Rewrite's <s>Best</s> Worst Moments</div>
                <br/>
                <div className={styles.socialLinks}>
                    <a className={styles.discord} href={discordLink}><Icon icon={discordIcon}/></a>
                    <a className={styles.github} href={githubLink}><Icon icon={githubIcon}/></a>
                </div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.bar}>
                    <ul className={styles.elements}>
                        {users && users.map(user => {
                          return <li><UserButton name={user.username} avatar={user.avatar}/></li>
                        })}
                    </ul>
                </div>
            </div>
            <img className={styles.background} src={background} alt="Nino"/>
        </div>
    )
}

export default Home;
