import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '../util/styles';

const styles = ({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '40rem',
    maxWidth: '98vw',
    borderRadius: '2px',
    backgroundColor: '#00000073',
    [breakpoints.down('lg')]: {
      width: '30',
    },
    [breakpoints.down('md')]: {
      width: '25rem',
    },
    borderLeft: '2px white solid',
    borderRight: '2px white solid',
  },
});

const PortfolioViewer = ({
  classes,
  item: {
    name,
    repo,
    deployed,
    image,
  },
}) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
      <p>hello fam</p>
    </div>
  </div>
);

PortfolioViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioViewer);
