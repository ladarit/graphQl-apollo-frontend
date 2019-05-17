const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.config.js');
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		// new CompressionPlugin({
		// 	asset: '[path].gz[query]',
		// 	algorithm: 'gzip',
		// 	test: /\.(js|html)$/,
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// }),
		new webpack.optimize.AggressiveMergingPlugin(),
		// new BundleAnalyzerPlugin(
		// 	//     {
		// 	// generateStatsFile: true,
		// 	// statsFilename: 'bundleStats'
		// 	// }
		// )		
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				parallel: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
});
