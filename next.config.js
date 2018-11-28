const withCss = require('@zeit/next-css');

console.log('config');

module.exports = withCss({
  cssModules: true,
  webpack(config, options) {
    return config;
  },
});
