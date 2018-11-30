import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    filter: 'blur(0px)',
    Webkitfilter: 'blur(0px)',
    opacity: '1',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  def: {
    height: 'fit-content',
    width: 'fit-content',
    padding: 0,
    margin: 0,
  },
  blur: {
    opacity: '0.6',
    filter: 'blur(30px)',
    Webkitfilter: 'blur(20px)',
  },
};

class BlurTransition extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    on: PropTypes.bool.isRequired,
    done: PropTypes.func,
    duration: PropTypes.number,
    layout: PropTypes.string,
  };

  static defaultProps = {
    layout: '',
    duration: 300,
    done: () => null,
  };

  componentDidUpdate = ({ on: pron }) => {
    const { on, done, duration } = this.props;
    if (on !== pron) {
      const dir = !pron && on ? 'in' : 'out';
      this.transitionTimeout = setTimeout(() => {
        done(dir);
      }, duration);
    }
  };

  componentWillUnmount = () => {
    if (this.transitionTimeout) clearTimeout(this.transitionTimeout);
  };

  getContainerClass = () => {
    const { on, classes } = this.props;
    if (on) return classes.blur;
    return '';
  };

  render = () => {
    const { classes, children, layout, duration } = this.props;
    return (
      <div
        className={classnames(
          classes.root,
          layout || classes.def,
          this.getContainerClass()
        )}
        style={{
          transition: `filter ${duration}ms ease, opacity ${duration}ms ease`,
          WebkitTransition: `-webkit-filter ${duration}ms ease, opacity ${duration}ms ease`,

        }}
      >
        {children}
      </div>
    );
  };
}

export default withStyles(styles)(BlurTransition);
