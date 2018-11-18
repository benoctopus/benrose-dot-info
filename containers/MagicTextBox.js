import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';
import BlurTransition from './BlurTransition';

const styles = {
  def: {
    height: 'inherit',
    width: 'inherit',
    padding: 0,
    margin: 0,
  },
};

class MagicTextBox extends PureComponent {
  static propTypes = {
    content: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    layout: PropTypes.string,
    classes: PropTypes.object.isRequired,
    duration: PropTypes.number,
  };

  static defaultProps = {
    layout: '',
    duration: 0,
  };

  state = {
    localIndex: 0,
    blurOn: false,
  };

  componentDidMount = () => {
    const { index } = this.props;
    const { localIndex } = this.state;
    if (localIndex !== index) this.setState({ localIndex: index });
  };

  componentDidUpdate = ({ index: prIndex }, { blurOn: pron }) => {
    const { index } = this.props;
    // const { blurOn } = this.state;
    if (prIndex !== index && !pron) {
      this.setState({ blurOn: true });
    }
  };

  transitionCallback = (dir) => {
    if (dir === 'in') {
      const { index } = this.props;
      this.setState({ localIndex: index, blurOn: false });
    }
  };

  getContent = () => {
    const { content } = this.props;
    const { localIndex } = this.state;
    return content[localIndex];
  };

  render = () => {
    const { localIndex } = this.state;
    const { classes, layout, duration } = this.props;
    const { blurOn } = this.state;
    return (
      <div className={classnames(layout || classes.def)}>

        <BlurTransition on={blurOn} done={this.transitionCallback} duration={duration || 300} layout={layout}>
          {this.getContent()}
        </BlurTransition>
      </div>
    );
  };
}

export default withStyles(styles)(MagicTextBox);
