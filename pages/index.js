import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import PageContainer from '../containers/PageContainer';
import Home from '../containers/Home';

const styles = {
  layout: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
};

const Index = (props) => {
  const {
    classes: { layout },
  } = props;

  return (
    <PageContainer layout={layout}>
      <Home />
      <link
        href="https://fonts.googleapis.com/css?family=Pacifico"
        rel="preload"
        as="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="preload"
        as="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
        rel="preload"
        as="stylesheet"
      />
    </PageContainer>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
