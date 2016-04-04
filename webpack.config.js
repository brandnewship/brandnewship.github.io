var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';
var path = require('path');

var config = {

  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },

  entry: {
    app: ['webpack/hot/dev-server', './src/main.js'],
    vendors: ['react']
  },

  resolve: { alias: {} },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module : {
    noParse: [],
    loaders:  [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
        path.resolve(__dirname, "src")
        ],
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions'
        ]
       },
       {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
    ]
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, 'node_modules/support-for/sass')
    ]
  }
};

config.addVendor('react', bower_dir + '/react/react.min.js');

module.exports = config;
