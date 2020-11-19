import React from 'react';
import UserButton from '../components/UserButton';

import background from './../images/background.png';
import './../styles/Home.css';

const avatars: string[] = [
    "https://cdn.discordapp.com/avatars/226618912320520192/ba8cdfbee624f24800226f420b65e2c6.png?size=128",
    "https://cdn.discordapp.com/avatars/249855890381996032/eedad0001a504773ec284c46e13f62be.png?size=128",
    "https://cdn.discordapp.com/avatars/343201768668266496/a3f7064bbd05fd762817c19cc43ed416.png?size=128",
    "https://cdn.discordapp.com/attachments/754826534694551712/778431443562397696/rlavus.jpg"
]

const Home = () => {
  return (
    <body>
      <div className="App">
        <h1 className="nino-header">Hamsterland</h1>
        <h2 className="nino-subheader">Rewrite's <s>Best</s> Worst Moments</h2>
        <div className="nav-bar">
          <ul className="nav-elements">
            <li><UserButton name="Squall" avatar={avatars[0]}/></li>
            <li><UserButton name="Tofu" avatar={avatars[1]}/></li>
            <li><UserButton name="Alex" avatar={avatars[2]}/></li>
            <li><UserButton name="rlavus" avatar={avatars[3]}/></li>
          </ul>
        </div>
        <img className="background-image" src={background} alt="background"/>
      </div>
    </body>
  );
}

export default Home;
