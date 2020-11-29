const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist'
   },

   module: {
     rules: [
 	  {
 		test: /\.(sa|sc|c)ss$/,
 		use: [
      MiniCssExtractPlugin.loader,
     'css-loader',
     'sass-loader',
 		],
 	  },
 	  {
 		test: /\.(svg|gif|png|eot|woff|ttf)$/,
 		use: [
 		  'url-loader',
 		],
 	  },
 	],
},
    plugins: [new MiniCssExtractPlugin()],
};
