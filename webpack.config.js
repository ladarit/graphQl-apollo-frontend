const path = require('path');
// var WebpackNotifierPlugin = require('webpack-notifier');
// var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const production = process.env.NODE_ENV === 'production';
// const cssFolderPath = path.join(__dirname, './Source/css');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.tsx'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './public/')		
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
		modules: ['src', 'node_modules'],
		alias: {
			root: path.resolve(__dirname, './src/'),
		}
	},
	devServer: {
		
		// proxy: {
		// 	'*': {
		// 		target: 'http://' + proxy,
		// 	}
		// },
		contentBase: path.resolve(__dirname, './public/'),
		host: 'localhost',
		port: 3000,
		// hot: true,
		writeToDisk: true,
		// public: 'http://localhost:3000',
		// publicPath: path.resolve(__dirname, './../Askod/AskodReact/')
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: [path.resolve(__dirname, './node_modules')],
				type: 'javascript/auto',
			},
			// js files
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			// ts | tsx files
			{
				test: /\.(ts|tsx)$/,
				enforce: 'pre',
				use: [
							{
								loader: 'tslint-loader',
								options: {
									emitErrors: false,
									failOnHint: true
								}
							}
				]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules)/,
				loader: ['babel-loader', 'awesome-typescript-loader']
			},
			// sass|scss|css files
			{
				test:  /\.(sa|sc|c)ss$/,
				// include: cssFolderPath,
				use: [
					MiniCssExtractPlugin.loader,
					// {
					// 	loader: 'dts-css-modules-loader',
					// 	options: {
					// 	  namedExport: true,
					// 	  banner: "// This file is generated automatically"
					// 	}
					//   },
					  {
						loader: 'css-loader',
						options: {
							modules: true,
							// camelCase: 'only',
							// exportOnlyLocals: true,
							// localIdentName: production ? '[name]_[local]_[hash:base64:5]' : '[local]'
							localIdentName: '[local]'
						}
					  },				
					
					// { loader: "sass-loader" }					
				]
			},
			// {
			// 	test: /\.svg$/,
			// 	loader: 'svg-inline-loader'
			//   },
			  {
				test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
				loader: "file-loader?name=[name].[ext]&outputPath=images/" 
			  }
			// {
			// 	test: /\.svg$/,
			// 	loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]&outputPath=public/'
			//   }
		
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	// optimization: {
	// 	//runtimeChunk: 'single',
	// 	splitChunks: {
	// 	  chunks: 'all',
	// 	  maxInitialRequests: Infinity,
	// 	  minSize: 0,
	// 	  cacheGroups: {
	// 		vendor: {
	// 		  test: /[\\/]node_modules[\\/]/,
	// 		  name(module) {
	// 			// get the name. E.g. node_modules/packageName/not/this/part.js
	// 			// or node_modules/packageName
	// 			const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
	
	// 			// npm package names are URL-safe, but some servers don't like @ symbols
	// 			return `npm.${packageName.replace('@', '')}`;
	// 		  },
	// 		},
	// 	  },
	// 	},
	// },
	plugins: [		
		// new StyleLintPlugin({
		// 	emitErrors: false,
		// 	failOnError: true,
		// 	syntax: "sass"|"scss"|"css"
		// }),
		new LodashModuleReplacementPlugin(),
		new MiniCssExtractPlugin({filename:  "./main.css" }),
		// new WebpackNotifierPlugin({alwaysNotify: true}),
		// new FriendlyErrorsWebpackPlugin(),
		new webpack.ContextReplacementPlugin(/graphql-language-service-interface[\/\\]dist/, /\.js$/),
		new webpack.HashedModuleIdsPlugin(),
		new WebpackCleanupPlugin({
			exclude: ["index.html", "manifest.json", "favicon.ico"],
		})
	]
};