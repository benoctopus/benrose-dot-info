import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { withStyles, prefix } from '../util/styles';

const styles = theme => ({
  root: {
    color: '#ffffff',
    marginTop: '1.5rem',
    paddingBottom: '1rem',
    [theme.breakpoints.up('lg')]: {
      margin: '3rem 0 0 1.5rem',
    },
    // display: 'flex',
    // flexFlow: 'column nowrap',
  },
  header: {
    fontSize: '2.4rem',
    width: 'fit-content',
    height: 'fit-content',
    letterSpacing: '.1rem',
    fontFamily: "'Roboto Slab', sans-serif",
    lineHeight: '2.3rem',
    borderBottom: '1px solid #ffffff',
  },
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: 'fit-content',
  },
  paragraph: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    paddingLeft: '.5rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 'none',
      fontSize: '1.2rem',
    },
    marginTop: '.8rem',
    lineHeight: '1.2',
  },
});

const SimpleParagraph = (props) => {
  const {
    header,
    Paragraph,
    classes,
    callback,
  } = props;
  const headerStyle = classnames(classes.root, classes.header);
  const paragraphStyle = classnames(classes.root, classes.paragraph);

  return (
    <div className={classes.container}>
      <Typography component="h1" className={headerStyle}>
        {header}
      </Typography>
      <Paragraph classname={paragraphStyle} callback={callback} />
    </div>
  );
};

SimpleParagraph.propTypes = {
  header: PropTypes.string.isRequired,
  Paragraph: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
};


export default withStyles(styles)(SimpleParagraph);
