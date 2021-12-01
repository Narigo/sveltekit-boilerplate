# Svelte component library boilerplate

This boilerplate features:

- Svelte
- component based development (Storybook)
- type-safety (TypeScript)
- auto-formatting (prettier)
- code-linting (eslint)
- unit and component tests (Jest with testing-library)
- browser tests (Cypress for Storybook and integration).
- CI tests for pull requests (GitHub actions)
- auto-deployment for static pages and Storybook (on GitHub pages)

## Development workflows

There are two ways how to work with this boilerplate. Either use Docker for everything or use `npm` to run the scripts directly.

## Storybook

To check Storybook for building components:

```
npm run storybook
```

## Component library

Building a component library with this boilerplate can be build by running:

```
npm run package
```

## Code checks

This boilerplate features linter checks, automatic formatting, unit and integration tests. All of this will be checked when a pull-request is merged.

### Running checks

GitHub actions will run various checks on pull requests. The checks are svelte-check, prettier and eslint. They can be run locally by using the two appropriate scripts.

Svelte-check can be run with:

```
npm run check
```

To run the linter and format checker:

```
npm run lint
```

### Running unit tests (Jest)

There are two commands. One for running the tests once and one that runs all tests while watching for changes.

To run a single test:

```
npm run test
```

To watch changes and run tests:

```
npm run test:watch
```

### Running browser tests (Cypress)
