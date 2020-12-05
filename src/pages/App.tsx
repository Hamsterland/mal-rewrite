import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Alex from './Alex';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/alex" component={Alex}/>
      </Switch>
    </main>
  );
}

export default App;
