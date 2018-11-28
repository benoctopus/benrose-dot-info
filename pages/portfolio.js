import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { axios } from 'axios';
import fetch from 'isomorphic-unfetch';
import PageContainer from '../containers/PageContainer';
import Layout from '../containers/Layout';
import PortfolioContainer from '../containers/PortfolioContainer';


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
    <Layout
      layout={layout}
      imageBaseURL="/static/portfolio-splash"
    >
      <PortfolioContainer />
    </Layout>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
