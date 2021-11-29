# Svelte component library boilerplate

This boilerplate features:

- Svelte
- Storybook
- TypeScript
- Jest tests (with testing-library)
- Cypress tests (integration and Storybook components).

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

## Running tests

There are two commands. One for running the tests once and one that runs all tests while watching for changes.

To run a single test:

```
npm run test
```

To watch changes and run tests:

```
npm run test:watch
```

## Running checks

GitHub actions will run various checks on pull requests. The checks are svelte-check, prettier and eslint. They can be run locally by using the two appropriate scripts.

Svelte-check can be run with:

```
npm run check
```

To run the linter and format checker:

```
npm run lint
```
