import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Squall from './Squall';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/squall" component={Squall}/>
      </Switch>
    </main>
  );
}

export default App;
