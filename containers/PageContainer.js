import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const styles = ({ breakpoints }) => ({
  root: {
    // width: '100vw',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    overflow: 'hidden',
    [breakpoints.down('md')]: {
      overflow: 'scroll',
    },
  },
  default: {
    display: 'inline-block',
  },
});

class PageContainer extends PureComponent {
  static propTypes = {
    layout: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    layout: '',
  };

  render = () => {
    const {
      classes: { root, defaultLayout },
      children,
      layout,
    } = this.props;

    return (
      <Fragment>
        <div className={classnames(root, layout || defaultLayout)}>
          {children}
        </div>
      </Fragment>
    );
  };
}

export default withStyles(styles)(PageContainer);
