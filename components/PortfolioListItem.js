import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ListItem, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '../util/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    backgroundColor: '#00000000',
    transition: 'opacity 250ms, background-color 250ms',
    // [theme.breakpoints.down('sm')]: {
    //   flexFlow: 'column nowrap',
    // },
    [theme.breakpoints.up('md')]: {
      opacity: '0.80',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#FFFFFF1A',
        opacity: '1',
      },
    },
  },
  thumbnail: {
    height: '5rem',
    width: '5rem',
  },
  textBox: {
    display: 'flex',
    flexFlow: 'column nowrap',
    paddingLeft: '.8rem',
    flexGrow: 1,
  },
  title: {
    fontSize: '1.3rem',
    borderBottom: 'solid white 1px',
    width: '100%',
  },
  label: {
    fontSize: '.5rem',
  },
  fontColor: {
    color: 'white',
  },
  active: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#FFFFFF40 !important',
      opacity: '1 !important',
    },
  },

});

const PortfolioListItem = ({
  classes,
  name,
  repo,
  thumbnail,
  active,
  onClick,
}) => (
  <ListItem
    key={name}
    onClick={onClick}
    className={
      classnames(classes.root, (active ? classes.active : ''))
    }
  >
    <CardMedia image={thumbnail} className={classes.thumbnail} />
    <div className={classes.textBox}>
      <Typography className={classnames(classes.fontColor, classes.title)}>{name}</Typography>
      <Typography className={classnames(classes.fontColor, classes.label)}>{repo}</Typography>
    </div>
  </ListItem>
);

PortfolioListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default withStyles(styles)(PortfolioListItem);
