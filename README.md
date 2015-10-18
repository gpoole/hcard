# hCard builder

Application designed to help users build markup in the hCard format from scratch.

This project is built using:

* [React](https://facebook.github.io/react/)
* [SystemJS](https://github.com/systemjs/systemjs)
* [JSPM](http://jspm.io/)
* [Babel](https://babeljs.io/)
* [Twitter Boostrap](http://getbootstrap.com/)

## Compatibility notes

* IE8 support is achieved with [core-js](https://github.com/zloirock/core-js), [html5-shiv](https://github.com/aFarkas/html5shiv) and [Respond](https://github.com/scottjehl/Respond).
* The upload preview feature does not currently work on IE9 or below, due to the lack of FileReader support

## Project structure

* _index.html_: The main application page and entrypoint
* _src/_: Full source code and assets used in the application
* _dist/_: Compiled assets, styles and scripts

## Quickstart

If all dependencies are installed (see *How to compile* below), you can view a preview of the application by running the default Grunt task:

```
grunt
```

This will compile all necessary assets and start a server at http://localhost:8000

## Compiling and developing

A current version of [Node JS](nodejs.org) is required for building and installing dependencies.

Dependencies are managed with [JSPM](http://jspm.io/), so you'll need to install that first. You'll also need [Grunt](http://gruntjs.com/) to build the project:

```
npm install -g jspm grunt-cli
```

You'll then need to install the project's dependencies:

```
npm install
jspm install
```

And finally build the project:

```
grunt build
```

If you are actively developing the project, you can use the provided `watch` task, which will run a webserver at http://localhost:8000 and will watch for changes, recompile and automatically refresh your browser:

```
grunt serve
```