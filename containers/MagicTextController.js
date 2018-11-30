import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MagicTextBox from './MagicTextBox';
import content from '../content/homePageText';
import { withStyles } from '../util/styles';

const styles = theme => ({
  textBoxLayout: {
    // margin: '2.5rem 0 0 0',
    maxWidth: '600px',
    // padding: '2rem 0 0 .8rem',
    [theme.breakpoints.down('sm')]: {
      // margin: '2.5rem auto 0 auto',
      paddingLeft: 0,
      paddingBottom: '1rem',
    },
    width: '100%',
  },
});

class MagicTextController extends PureComponent {
  state = { index: 0 }

  setIndex = index => this.setState({ index });

  render = () => {
    const { classes } = this.props;
    const { index } = this.state;

    return (
      <MagicTextBox
        layout={classes.textBoxLayout}
        content={content(this.setIndex)}
        index={index}
      />
    );
  }
}

export default withStyles(styles)(MagicTextController);
