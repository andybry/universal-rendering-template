# universal-rendering-template
Provides a base to start coding from when creating a React ES6 application that requires server side 
rendering.


## Features

  1. Webpack with a clean separation of production and development builds and standard optimizations
  for production.
  2. Babel set up to compile ES6+ and React to ES5.
  3. Hot loading on the client side (set up for React Components).
  4. Hot loading on the server side (set up for all code running under the Express handler).
  5. Easy deployment (after running npm install and npm prune the code is ready to be synced to a
  production environment e.g. to Heroku).


## Running

  1. `npm install`.
  2. `npm start` to start in development server or `NODE_ENV=production npm start` to start the 
  production server.
  

## Webpack configuration

The Webpack configuration is set up to build both development and production versions of the code.

Further configuration should be added to the correct file in webpack.config file in the 
`config/webpack` folder according to whether the new configuration is required in development, 
production, or both.

Building production code: `npm run compile`.

Buidling development code: there is no need to explicitly compile the development code because it is
compiled by the Express middleware when the server starts.


## Babel configuration

Babel is configured with the following presets: es2015, react and stage-0.


## Client side hot reloading

The top level React component is configured to reload along with children when there are
any changes to the nested components.


## Server side hot loading

All of the server side code reloads when any changes are made, without restarting the server (hence 
state is preserved (including the currently compiled modules that are held in memory).


# Deploying to Heroku

After making sure that you are logged in (`heroku login`) and that you have a Heroku application 
corresponding to the current application (`heroku create`):

  1. `heroku plugins:install heroku-builds` - install the plugin that allows deploying directly from
  the current directory.
  2. `npm deploy` - make sure that the code is built and push it to Heroku.
