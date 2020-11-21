import React from 'react';
import UserButton from '../components/UserButton';

import { Icon } from '@iconify/react-with-api';

import background from './../images/background.png';
import './../styles/Home.css';

const avatars: string[] = [
    'https://cdn.discordapp.com/avatars/226618912320520192/ba8cdfbee624f24800226f420b65e2c6.png?size=128',
    'https://cdn.discordapp.com/avatars/249855890381996032/eedad0001a504773ec284c46e13f62be.png?size=128',
    'https://cdn.discordapp.com/avatars/343201768668266496/a3f7064bbd05fd762817c19cc43ed416.png?size=128',
    'https://cdn.discordapp.com/attachments/754826534694551712/778431443562397696/rlavus.jpg',
    'https://cdn.discordapp.com/avatars/711211838305599538/0c79ce9727439b7212223f884283d57d.png?size=128',
    'https://cdn.discordapp.com/avatars/375573674306306050/c9af9a85ecc14c036ece1fd3d1403e22.png?size=128',
    'https://cdn.discordapp.com/avatars/718874307316678698/e73b36e0444a829c92d6dbb7a42905ae.png?size=128',
    'https://cdn.discordapp.com/avatars/480092510505402380/109127498a5aa083743c3e07c4cfd4de.png?size=128'
]

const githubLink = 'https://github.com/Hamsterland/mal-rewrite/';

const Home = () => {
  return (
    <body>
      <div className="App">
        <h1 className="header">Hamsterland</h1>
        <h2 className="subheader">Rewrite's <s>Best</s> Worst Moments</h2>
        <a href={githubLink}>
          <Icon icon="ant-design:github-filled" className="github"/>
        </a>
        <div className="nav-bar">
          <ul className="nav-elements">
            <li><UserButton name="Squall" avatar={avatars[0]}/></li>
            <li><UserButton name="Tofu" avatar={avatars[1]}/></li>
            <li><UserButton name="Alex" avatar={avatars[2]}/></li>
            <li><UserButton name="Rlavus" avatar={avatars[3]}/></li>
            <li><UserButton name="Maddo" avatar={avatars[4]}/></li>
            <li><UserButton name="Arden" avatar={avatars[5]}/></li>
            <li><UserButton name="NeoDaza" avatar={avatars[6]}/></li>
            <li><UserButton name="Mytho" avatar={avatars[7]}/></li>
          </ul>
        </div>
        <img className="background" src={background} alt="background"/>
      </div>
    </body>
  );
}

export default Home;
