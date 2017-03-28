const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractLess = new ExtractTextPlugin({
    filename: "default.css"
});

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
      modules: [
       path.join(__dirname, "src"),
       "node_modules"
     ]
  },
  module: {
      rules:
          [{
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use:
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        }]
  },
  plugins: [
      extractLess
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
