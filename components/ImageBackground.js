import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CardMedia, withStyles } from '@material-ui/core';

const styles = ({ palette, breakpoints }) => ({
  root: {
    position: 'fixed',
    top: 0,
    paddingTop: '100vh',
    width: '100vw',
    display: 'inline-block',
    // backgroundImage: 'url(splash.webp)',
    zIndex: 0,

  },
  overlay: {
    backgroundImage: `linear-gradient(to right, ${'#000000'}, #00000000)`,
    [breakpoints.down('md')]: {
      backgroundImage: `linear-gradient(to right, ${'#000000'}, #00000080)`,
      opacity: '1',
    },
    opacity: '0.9',
  },
  image: {
    // backgroundImage: 'url(/static/splash.webp), url(/static/splash.jpg)',
    filter: 'blur(0.5px)',
    backgroundPosition: 'left top',
  },
});

const ImageBackground = (props) => {
  const { classes, auxClasses, imageUrl } = props;

  return (
    <Fragment>
      <CardMedia
        image={imageUrl}
        className={classnames(classes.root, classes.image, auxClasses)}
      />
      <div className={classnames(classes.root, classes.overlay, auxClasses)} />
    </Fragment>
  );
};

ImageBackground.propTypes = {
  classes: PropTypes.object.isRequired,
  auxClasses: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

ImageBackground.defaultProps = {
  auxClasses: '',
};

export default withStyles(styles)(ImageBackground);
