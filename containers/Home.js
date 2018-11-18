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

const styles = {
  contentRoot: {
    height: 'inherit',
    padding: '1rem',
    display: 'flex',
    flexFlow: 'column nowrap',
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
    width: '100%',
  },
};

class Home extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    index: 0,
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

  setIndex = index => this.setState({ index });

  render = () => {
    const { classes } = this.props;
    const { index } = this.state;
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
          <MagicTextBox
            layout={classes.textBoxLayout}
            content={content(this.setIndex)}
            index={index}
          />
        </div>
        <ImageHandler
          auxClasses={classnames(this.getHidden())}
          done={this.handleImageLoad}
          baseUrl="/static/splash"
        />
      </Fragment>
    );
  };
}

export default withStyles(styles)(Home);
