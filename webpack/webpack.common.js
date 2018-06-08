const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const resolvePath = fileName => path.resolve(__dirname, '../', fileName);

const sources = {
  root: resolvePath('./'),
  distFolder: resolvePath('dist'),
  entries: {
    index: resolvePath('src/index.tsx'),
  },
  favicon: resolvePath('src/favicon.ico'),
  htmlTemplate: resolvePath('src/index.ejs'),
  serviceWorkerFile: 'sw.js',
};

const isProductionMode = process.env.WEBPACK_SERVE === 'production';

const config = {
  entry: sources.entries.index,
  output: {
    // filename: '[name].[hash].bundle.js',
    // chunkFilename: '[name].[hash].chunk.js',
    path: sources.distFolder,
    // publicPath: sources.distFolder,
  },
  resolve: {
    alias: {
      components: resolvePath('src/components'),
      styles: resolvePath('src/styles'),
      'odc-ui': resolvePath('src/components/ui'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.sass', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.ejs$/,
        use: 'ejs-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
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
    new CleanWebpackPlugin([sources.distFolder], {
      root: sources.root,
    }),
    new HtmlWebpackPlugin({
      title: 'PWA - React and Webpack',
      favicon: sources.favicon,
      template: sources.htmlTemplate,
      // minify: !!isProductionMode && {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true,
      // },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: sources.serviceWorkerFile,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://hacker-news.firebaseio.com'),
        handler: 'staleWhileRevalidate',
      }],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // name: false, => error when uncomment this
    },
  },
};

module.exports = {
  config,
  sources,
};
