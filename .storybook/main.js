const preprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	core: {
		builder: 'storybook-builder-vite'
	},
	svelteOptions: {
		preprocess: preprocess()
	},
	async viteFinal(config, { configType }) {
		const path = require('path');

		config.resolve.alias = [
			{ find: '$lib', replacement: path.resolve('./src/lib') },
			{ find: '$app', replacement: path.resolve('node_modules/@sveltejs/kit/assets/app') }
		];
		config.base = '/storybook/';

		return config;
	}
};
