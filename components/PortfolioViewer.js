import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Clear from '@material-ui/icons/Clear';
import { Typography, CardMedia, CardContent, IconButton } from '@material-ui/core';
import { withStyles } from '../util/styles';
import BlurTransition from '../containers/BlurTransition';

const ratio = w => `${((9 / 16) * w).toFixed(1)}rem}`;

const styles = ({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    // [breakpoints.down('sm')]: {
    //   width: '100%',
    // },
  },
  container: {
    width: '40rem',
    maxWidth: '98vw',
    border: '2px white solid',
    borderRadius: '2px',
    backgroundColor: '#00000073',
    maxHeight: '95vh',
    [breakpoints.down('lg')]: {
      padding: 'none',
      width: '30',
    },
    [breakpoints.down('md')]: {
      width: '25rem',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  titleBox: {
    padding: '.5rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    [breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
    },
  },
  title: {
    color: 'white',
    fontSize: '2rem',
    fontFamily: "'Pacifico', cursive",
    borderBottom: '2px white solid',
    margin: 'auto',
    [breakpoints.down('md')]: {
      // paddingLeft: '.5rem',
      margin: 'none',
      width: '100%',
    },
  },
  text: {
    fontSize: '.9rem',
    color: 'white',
  },
  linkBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    paddingTop: '1rem',
  },
  subTitle: {
    fontSize: '1.2rem',
    color: 'white',
    borderBottom: '1px solid white',
  },
  subLinkBox: {
    flexGrow: 1,
    borderRadius: '7px',
    transition: 'background-color 250ms, opacity 250ms',
    [breakpoints.up('md')]: {
      opacity: '.8',
    },
    '&:hover': {
      background: '#FFFFFF1A',
      cursor: 'pointer',
      opacity: '1',
    },
  },
  link: {
    color: '#FFFFFF',
    fontSize: '.5rem',
  },
  mobile: {
    backgroundColor: 'black',
    border: 'none',
  },
  exitButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 'fit-content',
    width: 'fit-content',
    zIndex: 999,
  },
  splash: {
    borderRadius: '10px',
    paddingTop: ratio(20),
    width: '50%',
    border: '1px solid white',
    [breakpoints.down('lg')]: {
      paddingTop: ratio(30),
      [breakpoints.down('md')]: {
        paddingTop: ratio(25),
        width: '100%',
        [breakpoints.down('sm')]: {
          paddingTop: 'calc((9 / 16) * 97.5vw)',
        },
      },
    },
  },
});

console.log('styles', ratio(40));
console.log('styles', ratio(30));

class PortfolioViewer extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    mob: PropTypes.bool,

  }

  static defaultProps = {
    mob: false,
  }

  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = {
      localItem: item,
      transitioning: false,
      nextItem: null,
    };
  }

  componentDidUpdate = () => {
    const { item: newItem, nextItem } = this.props;
    const { localItem: { name } } = this.state;

    if (newItem.name !== name && !nextItem) {
      this.setState({
        transitioning: true,
        nextItem: newItem,
      });
    }
  }

  transitionCallback = () => {
    const { nextItem } = this.state;
    if (nextItem) {
      this.setState({
        nextItem: null,
        localItem: nextItem,
        transitioning: false,
      });
    }
  }

  render = () => {
    const {
      classes,
      mob,
      handleClose,
    } = this.props;

    const {
      localItem: {
        name,
        repo,
        deployed,
        image,
        description,
      },
      transitioning,
    } = this.state;

    return (
      <div className={classes.root}>
        {
          mob && (
            <IconButton className={classes.exitButton} onClick={handleClose}>
              <Clear style={{ color: 'white' }} onClick={handleClose} />
            </IconButton>
          )
        }
        <BlurTransition
          layout={classes.container}
          done={this.transitionCallback}
          duration={250}
          on={transitioning}
        >
          <div className={classes.titleBox}>
            <CardMedia image={image} className={classes.splash} />
            <Typography component="h1" className={classes.title}>
              {name}
            </Typography>
          </div>
          <CardContent style={{ padding: '.8rem' }}>
            <Typography className={classes.text}>
              {description}
            </Typography>
            <div className={classes.linkBox}>
              <div className={classes.subLinkBox} style={{ paddingRight: '.2rem' }}>
                <Typography className={classes.subTitle}>
              Repository
                </Typography>
                <a href={repo} target="_none">
                  <Typography className={classes.link}>
                    {repo}
                  </Typography>
                </a>
              </div>
              <div className={classes.subLinkBox} style={{ paddingLeft: '.2rem' }}>
                <Typography className={classes.subTitle}>
              Deployed
                </Typography>
                <a href={deployed} target="_none">
                  <Typography className={classes.link}>
                    {deployed}
                  </Typography>
                </a>
              </div>
            </div>
          </CardContent>
        </BlurTransition>
      </div>
    );
  };
}

export default withStyles(styles)(PortfolioViewer);
