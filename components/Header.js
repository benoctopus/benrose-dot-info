import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, prefix } from '../util/styles';
import Logo from './Logo';

const styles = {
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    height: 'fit-content',
  },
};

console.log(prefix(styles));

const Header = (props) => {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <Logo />
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
