import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import Content from './Content';

const Layout = ({ layout, children, gradient, imageBaseURL }) => (
  <PageContainer layout={layout}>
    <Content imageBaseURL={imageBaseURL} gradient={gradient}>
      {children}
    </Content>
  </PageContainer>
);

Layout.propTypes = {
  layout: PropTypes.string,
  children: PropTypes.node.isRequired,
  imageBaseURL: PropTypes.string,
  gradient: PropTypes.string,
};

Layout.defaultProps = {
  layout: '',
  imageBaseURL: '',
  gradient: '',
};

export default Layout;
