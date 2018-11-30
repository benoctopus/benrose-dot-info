import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import classnames from 'classnames';
import { withStyles } from '../util/styles';
import PortfolioListItem from './PortfolioListItem';
import portfolio from '../pages/portfolio';

const styles = theme => ({
  root: {
    borderLeft: 'solid white 1px',
    // marginTop: '2rem',
    height: 'fit-content',
    transition: 'opacity 250ms, background-color 250ms',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
  },
});

const PortfolioList = ({ index, items, classes, callback, auxClass }) => (
  <List className={classnames(classes.root, auxClass)}>
    {(function () {
      if (!items.length) return null;
      return [...items].map(
        (item, i) => (
          <PortfolioListItem
            {...item}
            onClick={() => callback(i)}
            active={i === index}
          />
        )
      );
    }())}
  </List>
);

PortfolioList.propTypes = {
  index: PropTypes.number.isRequired,
  items: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
  auxClass: PropTypes.string.isRequired,
};

export default withStyles(styles)(PortfolioList);
