import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

import Squall from './Squall';
import Tofu from './Tofu';
import Alex from './Alex';
import Rlavus from './Rlavus';
import Maddo from './Maddo';

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
      </Switch>
    </main>
  );
}

export default App;
