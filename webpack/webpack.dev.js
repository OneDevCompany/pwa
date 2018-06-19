const { config, sources } = require('./webpack.common.js');
const merge = require('webpack-merge');

// const history = require('connect-history-api-fallback');
// const convert = require('koa-connect');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  serve: {
    content: sources.distFolder,
    port: 9000,
    // add: (app, middleware, options) => {
    //   const historyOptions = {
    //     // ... see: https://github.com/bripkens/connect-history-api-fallback#options
    //   };

    //   app.use(convert(history(historyOptions)));
    // },
  },
});
