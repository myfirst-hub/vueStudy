let path =require('path');

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let HtmlWebpackHtml = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    // open: true,
    contentBase: './dist', // 指定服务器根目录
    hot: true
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      "@": path.resolve(__dirname, './src'),
      "styles": path.resolve(__dirname, './src/assets/styles')
    }
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'image/'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackHtml({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}