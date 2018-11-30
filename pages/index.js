import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Hidden } from '@material-ui/core';
import { axios } from 'axios';
import fetch from 'isomorphic-unfetch';
import PageContainer from '../containers/PageContainer';
import Layout from '../containers/Layout';
import MagicTextController from '../containers/MagicTextController';


const styles = {
  layout: {
    display: 'flex',
    flexFlow: 'column wrap',
  },
  spacer: {
    display: 'inline-block',
    height: '2rem',
  },
};

const Index = (props) => {
  const { classes: { layout, spacer } } = props;

  return (
    <Layout layout={layout} imageBaseURL="/static/splash">
      <MagicTextController />
    </Layout>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
