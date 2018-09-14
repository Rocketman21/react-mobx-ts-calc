const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {isDevelopment, isProduction} = require('./helpers');

module.exports = env => {
	const loaders = [];

	if (isDevelopment(env)) {
		loaders.push('style-loader');
	} else if (isProduction(env)) {
		loaders.push(MiniCssExtractPlugin.loader);
	}

	loaders.push({
		loader: 'css-loader',
		options: {
			modules: true,
			importLoaders: 1,
			camelCase: true,
			localIdentName: '[name]__[local]___[hash:base64:5]',
			sourceMap: isDevelopment(env),
		},
	});

	loaders.push({
		loader: 'typed-css-modules-loader',
		options: {
			camelCase: true
		}
	});

	if (isProduction(env)) {
		loaders.push({
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: () => [autoprefixer],
			},
		});
	}

	return loaders;
};
