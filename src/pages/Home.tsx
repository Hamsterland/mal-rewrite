import React from 'react';
import UserButton from '../components/UserButton';
import { Icon } from '@iconify/react-with-api';

import background from './../images/background.png';
import styles from '../styles/Home.module.scss';
import { Users } from './App';


const discordLink = 'https://discord.gg/UsXvSUh7qu';
const githubLink = 'https://github.com/Hamsterland/mal-rewrite/';

const discordIcon = 'logos:discord';
const githubIcon = 'ant-design:github-filled';


const Home = () => {
    
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
                        {Users.map(user => {
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
