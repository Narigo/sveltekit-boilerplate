export default {
	transform: {
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
		'^.+\\.ts$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'svelte', 'ts']
};
