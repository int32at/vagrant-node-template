# vagrant-node-template
A vagrant template to get started quickly with node.js development

### Prerequisites

Working installation of [vagrant](https://www.vagrantup.com/)

### Installation

1. Clone this repo `git clone https://github.com/int32at/vagrant-node-template.git`
2. Open the repo's root `cd vagrant-node-template`
3. Start vm using `vagrant up && vagrant ssh`

This will automatically set up a virtual machine (ubuntu trusty64) and install the following software:

Globally:
- node
- npm
- nodemon
- grunt-cli

Locally (dev):
- mocha
- istanbul

### Usage
You can start editing the [module](src/index.js) right away. To execute the module/code you can use `node index.js`. If you are developing a server app, you might want the server restarted everytime the code changes - this is were `nodemon -L index.js` can be used. (note the -L parameter).

### Testing

- `npm test`:
After you started writing some unit tests in the [test](src/test) directory, like [this](src/test/test.js) one, you can use `npm test` to execute all tests. It will print a nice output where you can see which tests passed or failed.

- `npm run test-watch`:
Pretty much the same as `npm test` but will watch for file changes, in tests or your actual code, and will rerun your test suite! The output is minimal, so its great if you run it in a terminal.

- `npm run coverage`:
Runs the complete test suite and creates a nice code coverage.
