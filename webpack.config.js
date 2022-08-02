const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   devtool: "source-map",
   devServer: {
     port: 3000,
     hot: true,
     historyApiFallback: {index: '/'},
     open:true
   },
   module: {
      rules: [
         {
         test:/\.(s*)css$/,
         use: [MiniCss.loader, 'css-loader', 'sass-loader']
      },
      {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
   ]
   },
   plugins: [
      new MiniCss({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
        hash: false,
      }),
   ]
};