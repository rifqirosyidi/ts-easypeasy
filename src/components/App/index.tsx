import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div>
        <Link to='/'>Homepage</Link>
        <Link to='/about'>About</Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route exact path='/about'>
          <h1>About</h1>
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
