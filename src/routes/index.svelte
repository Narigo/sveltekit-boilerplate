<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';

	const gitHubUrl = 'https://github.com/Narigo/sveltekit-boilerplate';
	const repoUrl = `${gitHubUrl}/blob/main`;
</script>

<Headline>SvelteKit boilerplate</Headline>
<p>This boilerplate features:</p>
<ul>
	<li>
		- <a href="https://kit.svelte.dev/" rel="external">SvelteKit</a> (https://kit.svelte.dev/)
	</li>
	<li>
		- component based development (<a href="https://storybook.js.org/" rel="external">Storybook</a>)
	</li>
	<li>
		- type-safety (<a href="https://www.typescriptlang.org/" rel="external">TypeScript</a>)
	</li>
	<li>- auto-formatting (<a href="https://prettier.io/" rel="external">prettier</a>)</li>
	<li>
		- <a href="{gitHubUrl}#running-checks" rel="external">code-linting</a> (<a
			href="https://eslint.org/"
			rel="external">eslint</a
		>)
	</li>
	<li>
		- <a href="{gitHubUrl}#running-unit-tests-jest" rel="external">unit and component tests</a>
		(<a href="https://jestjs.io/" rel="external">Jest</a>
		with
		<a href="https://testing-library.com/" rel="external">testing-library</a>)
	</li>
	<li>
		- <a href="{gitHubUrl}#running-browser-tests-playwright" rel="external">browser tests</a>
		(<a href="https://playwright.dev/" rel="external">Playwright</a> for Storybook and integration)
	</li>
	<li>
		- <a href="{repoUrl}/.github/workflows/run-checks.yml" rel="external"
			>CI tests for pull requests</a
		>
		(<a href="https://github.com/features/actions" rel="external">GitHub actions</a>)
	</li>
	<li>
		- <a href="{repoUrl}/.github/workflows/publish-docs.yml" rel="external"
			>auto-deployment for static pages and Storybook</a
		>
		(on <a href="https://pages.github.com/" rel="external">GitHub pages</a>)
	</li>
</ul>
<p>Check <a href="/storybook/" rel="external">Storybook</a> components.</p>
<p>
	Visit <a href="https://kit.svelte.dev" rel="external">kit.svelte.dev</a> to read the documentation
</p>
<p>
	Inspect the <a href={gitHubUrl} rel="external">source code of this boilerplate at GitHub</a>.
</p>
