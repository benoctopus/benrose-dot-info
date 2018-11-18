const withCss = require('@zeit/next-css');
const withImages = require('next-images');

console.log('config');

module.exports = withImages(withCss({
  cssModules: true,
  webpack(config, options) {
    return config;
  },
}));
