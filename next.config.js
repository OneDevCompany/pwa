const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({
  webpack(config, options) {
    config.resolve.alias = {
      'components': path.resolve(__dirname, 'src/components'),
    };

    return config;
  },
  sassLoaderOptions: {
    includePaths: ['./node_modules'],
  },
}));
