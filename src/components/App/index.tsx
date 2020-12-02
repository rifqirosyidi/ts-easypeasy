import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

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
    </div>
  );
}
