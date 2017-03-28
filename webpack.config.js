var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
     //打包的入口文件  String|Object
    entry: {
    	bundle : path.resolve(__dirname, 'components/index.js'),
    	vendor: ['react', 'react-dom']
    },
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, 'public'),
        //指定打包文件名称
        filename: '[name].js'
    },
    module:{
    	loaders:[
    		{
    			test:/\.js$/,
    			loader:['babel-loader'],
    			exclude: path.resolve(__dirname, 'node_modules')
    		},
    		{
	        	test: /\.less/,
	        	loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!less-loader"})
	        },
	        {
            	test: /\.css/,
            	loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"})
            },
    	]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.js'}),
      new ExtractTextPlugin("bundle.css")
    ]

};