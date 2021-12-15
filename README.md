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

After cloning the repository, you can either run `npm` commands directly or use a Docker container to run the commands in it. Docker can be used to create a more reproducible environment, but it's really optional. The accompanied `docker-compose.yml` file can be used to start a bash in a container.

The optional command to run the everything in a container would be:

```
docker-compose run --service-ports app bash
```

First of all, install the necessary dependencies:

```
npm ci
```

### Storybook

To build components in isolation, Storybook in development mode can be started through:

```
npm run storybook
```

### Component library

Building a component library with this boilerplate can be build by running:

```
npm run package
```

### Code checks

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

To do a single test run:

```
npm run test
```

To watch changes and run tests:

```
npm run test:watch
```

### Running browser tests (Cypress)

The following commands allow running and seeing integration tests with Cypress.

> **Note:** If you're using the Docker approach: Cypress can't open a browser from within the container. Instead, a browser in the container is necessary and it needs to run in there. With the `DISPLAY` variable set, it's possible to forward the browser windows to another machine (the host machine).

> **Note for MacOS users:** This boilerplate features some helpers for MacOSX, if you're running through Docker. It needs XQuartz installed on the host machine and the helper scripts can be used to run it. Use `./cy-all.sh` to get a shell inside a Docker container that can run the following commands.

A single run of all tests of the storybook components:

```
npm run ci:test:storybook
```

Start the server and open cypress with all tests of the storybook components:

```
npm run test:watch:storybook
```

A single run of all end-to-end/integration tests:

```
npm run ci:test:integration
```

Start the server and open cypress with all end-to-end/integration tests:

```
npm run test:watch:integration
```

There is another special command to run all test commands once sequentially:

```
npm run ci:test
```

The last command can be used to run all the test suites manually before pushing it and letting the CI check all tests automatically.
