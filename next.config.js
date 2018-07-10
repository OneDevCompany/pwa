const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({
  webpack(config, options) {
    config.resolve.alias = {
      'components': path.resolve(__dirname, 'src/components'),
      'models': path.resolve(__dirname, 'src/models'),
      'services': path.resolve(__dirname, 'src/services'),
      'src': path.resolve(__dirname, 'src'),
    };

    return config;
  },
  sassLoaderOptions: {
    includePaths: ['./node_modules'],
  },
}));
