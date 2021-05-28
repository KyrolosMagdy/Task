import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Brand from '../../assets/brand.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    shadow: 'none',
  },
  aboveNav: {
    padding: '12px',
    backgroundColor: '#5c5c5c',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.aboveNav}></div>
      <AppBar position="static">
        <Toolbar>
          <img src={Brand} alt="Logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
