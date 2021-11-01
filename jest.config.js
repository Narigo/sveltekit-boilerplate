export default {
	moduleFileExtensions: ['js', 'svelte', 'ts'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	transform: {
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
		'^.+\\.ts$': 'ts-jest'
	}
};
