var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
	entry: [
		  'webpack-dev-server/client?http://localhost:8080'
		, './src/index.js'
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: 'babel'
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: 'style-loader!css-loader'
			}
		]
	}
	, resolve: {
		extensions: ['', '.js', '.jsx']
	}
	, output: {
		path: __dirname + '/dist'
		, publicPath: '/'
		, filename: 'bundle.js'
	}
    , plugins: [HTMLWebpackPluginConfig]
	, devServer: {
		  contentBase: './dist'
		, historyApiFallback: true
		, stats: {
			colors: true
		}
	}
};
