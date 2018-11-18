import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    borderRadius: '100%',
    backgroundColor: '#00000000',
    width: '3.6rem',
    height: '3.6rem',
    border: '.18rem solid #ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontFamily: "'Pacifico', cursive",
  },
};

const Logo = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.text}>BR</Typography>
  </div>
);

export default withStyles(styles)(Logo);
