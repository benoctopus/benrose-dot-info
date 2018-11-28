import React from 'react';
import { List } from '@material-ui/core';
import { withStyles } from '../util/styles';
import PortfolioListItem from './PortfolioListItem';

const styles = theme => ({
  root: {
    borderLeft: 'solid white 1px',
    // marginTop: '2rem',
    [theme.breakpoints.up('md')]: {

    },
  },
});

const PortfolioList = ({ index, items, classes, callback }) => (
  <List className={classes.root}>
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

export default withStyles(styles)(PortfolioList);
