import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

import Squall from './Squall';
import Tofu from './Tofu';
import Alex from './Alex';
import Rlavus from './Rlavus';
import Maddo from './Maddo';
import Arden from './Arden';
import NeoDaza from './NeoDaza';
import Mytho from './Mytho';
import Yuun, { YuunData } from './Yuun';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/squall" component={Squall}/>
        <Route path="/tofu" component={Tofu}/>
        <Route path="/alex" component={Alex}/>
        <Route path="/rlavus" component={Rlavus}/>
        <Route path="/maddo" component={Maddo}/>
        <Route path="/arden" component={Arden}/>
        <Route path="/neodaza" component={NeoDaza}/>
        <Route path="/mytho" component={Mytho}/>
        <Route path={'/' + YuunData.username} component={Yuun}/>
      </Switch>
    </main>
  );
}

export default App;
