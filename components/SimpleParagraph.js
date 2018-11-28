import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { withStyles, prefix } from '../util/styles';

const styles = theme => ({
  root: {
    color: '#ffffff',
  },
  header: {
    fontSize: '2.4rem',
    width: 'fit-content',
    letterSpacing: '.1rem',
    fontFamily: "'Roboto Slab', sans-serif",
    lineHeight: '2.3rem',
    borderBottom: '1px solid #ffffff',
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
    paragraph,
    classes,
    callback,
  } = props;
  console.log(paragraph(classes.paragraph));
  const headerStyle = classnames(classes.root, classes.header);
  const paragraphStyle = classnames(classes.root, classes.paragraph);

  return (
    <Fragment>
      <Typography component="h1" className={headerStyle}>
        {header}
      </Typography>
      {paragraph(paragraphStyle, callback)}
    </Fragment>
  );
};

SimpleParagraph.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
};


export default withStyles(styles)(SimpleParagraph);
