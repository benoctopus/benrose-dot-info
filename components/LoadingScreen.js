import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Typography, Fade } from '@material-ui/core';
import { withStyles } from '../util/styles';
import Logo from './Logo';

const styles = theme => ({
  root: {
    zIndex: 2,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  textContainer: {
    display: 'flex',
    width: 'fit-content',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0',
    animation: 'fade-in 400ms ease-in',
  },
  text: {
    fontSize: '2.8rem',
    color: 'white',
    letterSpacing: '.2rem',
    FontFamily: "'Roboto Slab', serif",
    paddingLeft: '1.2rem',
  },
});

class LoadingScreen extends PureComponent {
  static propTypes = {
    on: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    duration: PropTypes.number.isRequired,
    auxClasses: PropTypes.string.isRequired,
  }

  state = {
    complete: false,
    loadingMessage: false,
  }

  componentDidMount = () => {
    this.messageTimeout = setTimeout(() => {
      const { on } = this.props;
      if (on) {
        this.setState({ loadingMessage: true });
      }
    }, 100);
  }

  componentDidUpdate = ({ on: pon }) => {
    const { on, duration } = this.props;
    const { complete } = this.state;
    if (!complete && pon !== on) {
      this.transitionTimeout = setTimeout(() => {
        this.setState({ complete: true });
      }, duration);
    }
  }

  componentWillUnmount = () => {
    if (this.transitionTimeout) {
      clearTimeout(this.transitionTimeout);
    }
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }

  getClasses = () => {
    const { classes, auxClasses } = this.props;
    return classnames(classes.root, auxClasses, 'loading');
  }

  render = () => {
    const { complete, loadingMessage } = this.state;
    const { on, classes } = this.props;
    console.log(complete);
    return (
      !complete ? (
        <div className={this.getClasses()}>
          {
            loadingMessage ? (
              <div className={classes.textContainer}>
                <Logo />
                <Typography className={classes.text}>| Loading...</Typography>
              </div>
            ) : null
          }
        </div>
      ) : null
    );
  }
}

export default withStyles(styles)(LoadingScreen);
