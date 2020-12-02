import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

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
          <Button component={Link} to='/' color='inherit'>
            Home
          </Button>
          <Button component={Link} to='/about' color='inherit'>
            About
          </Button>
        </Toolbar>
      </AppBar>

      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}
