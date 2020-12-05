import React, { useEffect, useState } from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import User from '../models/User';
import Alex from './Alex';
import Squall from './Squall';
import Tofu from './Tofu';
import Rlavus from './Rlavus';
import Maddo from './Maddo';
import Arden from './Arden';
import NoeDaza from './NeoDaza';
import Mytho from './Mytho';
import Yuun from './Yuun';
import Comet from './Comet';
import Uchuu from './Uchuu';

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
  '630427600220717067',

  // Comet
  '339152459706531840',

  // Uchuu
  '330746772378877954'
];

export const Users: User[] = [];

const App = () => {

    const [isBusy, setBusy] = useState(true);
    const baseUrl = 'https://api.codetabs.com/v1/proxy/?quest=http://hamsterland.herokuapp.com/api/users?id=';

    useEffect(() => {
        setBusy(true);
        const fetchData = async() => {
            for (const id of userIds) {
                const response = await fetch(baseUrl + id);
                if (!response.ok) {
                    continue;
                }
                const user: User = await response.json(); 
                Users.push(user);
            }

            setBusy(false);
        }

        fetchData();
    }, [])
    
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Squall" component={Squall}/>
              <Route path="/Tofu" component={Tofu}/>
              <Route path="/AlexPaulLEWZ" component={Alex}/>
              <Route path="/rlavus" component={Rlavus}/>
              <Route path="/Maddo" component={Maddo}/>
              <Route path="/arden" component={Arden}/>
              <Route path="/NeoDaza" component={NoeDaza}/>
              <Route path="/Mythologically" component={Mytho}/>
              <Route path="/Csri" component={Yuun}/>
              <Route path="/Red Comet" component={Comet}/>
              <Route path="/Uchuu" component={Uchuu}/>
          </Switch>
      </main>
  );
}

export default App;
