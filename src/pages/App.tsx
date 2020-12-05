import React, { useEffect, useState } from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Alex from './Alex';
import User from '../models/User';

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

  // Uchuu
  '330746772378877954'
];

export const Users: User[] = [];

const App = () => {

    const [isBusy, setBusy] = useState(true);

    useEffect(() => {
        setBusy(true);
        const fetchData = async() => {
            for (const id of userIds) {
                const response = await fetch('https://api.codetabs.com/v1/proxy/?quest=http://hamsterland.herokuapp.com/api/users?id=' + id);
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
              {Users.map(user => {
                  return <Route path="/alex" component={Alex}/>
              })}
          </Switch>
      </main>
  );
}

export default App;
