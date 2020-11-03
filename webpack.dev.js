const { merge } = require('webpack-merge');

const config = require('./config.js');

const NODE_ENV = 'development';

module.exports = env => {
  const webpackCommonConfig = require('./webpack.common.js')(NODE_ENV);

  return merge(webpackCommonConfig, {
    mode: NODE_ENV,
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: 3030,
      stats: 'minimal',
      historyApiFallback: true,
      open: true,
      publicPath: config.paths.public,
      contentBase: config.paths.dist,
    },
  });
};