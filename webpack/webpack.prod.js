const { config } = require('./webpack.common.js');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = merge(config, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
  ],
});

console.log(prodConfig);
console.log(prodConfig.module.rules[2].use);

module.exports = prodConfig;
