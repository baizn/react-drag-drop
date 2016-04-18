
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.config');

var app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/build/',
  stats: {
    colors: true
  }
}));

app.use(express.static(__dirname));

app.listen(8080, 'localhost', function () {
  console.log('Server listening on http://localhost:8080')
});
