import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { withStyles } from '../util/styles';
import Logo from './Logo';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '6rem !important',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0 0 0',
    },
  },
  link: {
    fontSize: '1rem',
    // paddingLeft: '.8rem',
    height: 'fit-content',
    borderBottom: '1px solid #00000000',
    transition: 'border-color 100ms, color 200ms ease-out, font-size 200ms ease-out',
    color: 'whiteSmoke',
    '&:hover': {
      cursor: 'pointer',
      fontSize: '1.2rem',
      color: 'white',
      borderColor: 'white',
    },
  },
  a: {
    border: '0px #00000000 !important',
    outline: '0px #00000000 !important',
  },
});

const Spacer = () => (
  <div
    style={{
      display: 'inline-block',
      width: '1rem',
    }}
  />
);

const Header = (props) => {
  const { classes } = props;

  const target = process.browser && !/portfolio/.test(window.location.pathname)
    ? 'portfolio'
    : '';

  return (
    <header className={classes.root}>
      <Logo />
      <Spacer />
      <Link href={`/${target}`}>
        <Typography className={classes.link}>
          {target ? 'Portfolio' : 'Home' }
        </Typography>
      </Link>
      <Spacer />
      <a href="https://github.com/benoctopus" target="_none" className={classes.a}>
        <Typography className={classes.link}>
        Github
        </Typography>
      </a>
      <Spacer />
      <a
        href="https://www.linkedin.com/in/brose925 "
        target="_none"
        className={classes.a}
      >
        <Typography className={classes.link}>
        Linkdin
        </Typography>
      </a>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
