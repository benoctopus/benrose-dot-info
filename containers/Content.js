import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Typography, Button, Grow } from '@material-ui/core';
import { withStyles } from '../util/styles';
import content from '../content/homePageText';
import Logo from '../components/Logo';
import ImageHandler from './ImageHandler';
import SimpleParagraph from '../components/SimpleParagraph';
import Header from '../components/Header';
import MagicTextBox from './MagicTextBox';
import LoadingScreen from '../components/LoadingScreen';

const styles = theme => ({
  contentRoot: {
    // position: 'absolute',
    padding: '0 1rem',
    // display: 'flex',
    // flexFlow: 'column nowrap',
    height: '100vh',
    zIndex: 1,
  },
  transitionBase: {
    transition: 'opacity 300ms, filter 300ms',
    opacity: 1,
    filter: 'blur(0px)',
  },
  hidden: {
    opacity: '0 !important',
    filter: 'blur(12px) !important',
  },
  textBoxLayout: {
    margin: '2.5rem 0 0 0',
    maxWidth: '600px',
    paddingLeft: '.8rem',
    [theme.breakpoints.down('sm')]: {
      // margin: '0',
      paddingLeft: 0,
      paddingBottom: '1rem',
    },
    width: '100%',
  },
});

class Content extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    imageBaseURL: PropTypes.string,
    gradient: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    imageBaseURL: '',
    gradient: '',
  }

  state = {
    imgLoaded: false,
  };

  handleImageLoad = () => this.setState({ imgLoaded: true })

  getHidden = (inverse = false) => {
    const { imgLoaded } = this.state;
    const { classes } = this.props;
    if (!imgLoaded && !inverse) {
      return classnames(classes.hidden, classes.transitionBase);
    } if (imgLoaded && inverse) {
      return classnames(classes.hidden, classes.transitionBase);
    }
    return classes.transitionBase;
  }

  render = () => {
    const { classes, imageBaseURL, gradient, children } = this.props;
    const { imgLoaded } = this.state;

    return (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab"
          rel="stylesheet"
        />
        <LoadingScreen on={!imgLoaded} duration={300} auxClasses={this.getHidden(true)} />
        <div className={classnames(classes.contentRoot, this.getHidden())}>
          <Header />
          {children}
        </div>
        <ImageHandler
          auxClasses={classnames(this.getHidden())}
          done={this.handleImageLoad}
          baseUrl={imageBaseURL}
          gradient={gradient}
        />
      </Fragment>
    );
  };
}

export default withStyles(styles)(Content);
