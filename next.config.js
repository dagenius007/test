const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('nextjs-fonts');
const withImages = require('next-images');
const path = require('path');

module.exports = withImages(
	withCSS(
		withSass(
			withFonts({
				webpack(config, options) {
					config.resolve.modules.push(path.resolve('./'));
					return config;
				},
			}),
		),
	),
);
