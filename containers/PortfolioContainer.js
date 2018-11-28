import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classnames from 'classnames';
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
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100vh - 6rem)',
      alignItems: 'center',
      paddingBottom: '2rem',
    },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
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
  }

  componentDidMount = () => {
    axios.get('/static/portfolioItems.json')
      .then(({ data: { items } }) => this.setState({ items, fetched: true }));
  }

  handleChangeIndex = index => this.setState({ index })

  render = () => {
    const { classes } = this.props;
    const { items, index, fetched } = this.state;
    return (
      <div className={classnames(classes.root, (!fetched ? classes.hidden : ''))}>
        <PortfolioList
          items={items}
          callback={this.handleChangeIndex}
          index={index}
        />
        <PortfolioViewer item={items[index]} />
      </div>
    );
  }
}

export default withStyles(styles)(PortfolioContainer);
