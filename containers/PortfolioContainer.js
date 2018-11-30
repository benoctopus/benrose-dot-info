import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classnames from 'classnames';
import { Hidden, Dialog, Fade } from '@material-ui/core';
import { withStyles } from '../util/styles';
import PortfolioList from '../components/PortfolioList';
import PortfolioViewer from '../components/PortfolioViewer';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    transition: 'opacity 300ms, filter 300ms',
    filter: 'blur(0)',
    paddingTop: '2rem',
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100vh - 6rem)',
      alignItems: 'center',
      padding: '0 2rem 0 0',
    },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  dialogPaper: {
    backgroundColor: '#00000000',
    width: '96vw',
    display: 'flex',
  },
});

class PortfolioContainer extends PureComponent {
  static propTypes = {
    classes: PropTypes.string.isRequired,
  }

  state = {
    items: [],
    fetched: false,
    index: 0,
    mobViewerOpen: false,
  }

  componentDidMount = () => {
    axios.get('/static/portfolioItems.json')
      .then(
        ({ data: { items } }) => (
          this.setState({ items, fetched: true })
        )
      );
  }

  handleChangeIndex = (index, callback = null) => (
    this.setState({ index }, callback)
  )

  handleOpenMobViewer = (index) => {
    this.handleChangeIndex(
      index,
      () => this.setState({ mobViewerOpen: true }));
  }

  handleCloseViewer = () => this.setState({ mobViewerOpen: false })

  render = () => {
    const { classes } = this.props;
    const { items, index, fetched, mobViewerOpen } = this.state;
    return (
      <div
        className={
          classnames(classes.root, (!fetched ? classes.hidden : ''))
        }
      >
        {
          !items.length
            ? null
            : (
              <Fragment>
                <Hidden smDown>
                  <PortfolioList
                    items={items}
                    callback={this.handleChangeIndex}
                    index={index}
                  />
                  <PortfolioViewer item={items[index]} />
                </Hidden>
                <Hidden mdUp>
                  <PortfolioList
                    items={items}
                    callback={this.handleOpenMobViewer}
                    index={index}
                    auxClass={mobViewerOpen && classes.hidden}
                  />
                  <Dialog
                    fullscreen
                    open={mobViewerOpen}
                    onClose={this.handleCloseViewer}
                    TransitionComponent={Fade}
                    className={classes.dialog}
                    PaperProps={{
                      className: classes.dialogPaper,
                    }}
                  >
                    <PortfolioViewer
                      item={items[index]}
                      handleClose={this.handleCloseViewer}
                      mob
                    />
                  </Dialog>
                </Hidden>
              </Fragment>
            )
        }
      </div>
    );
  }
}

export default withStyles(styles)(PortfolioContainer);
