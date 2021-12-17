<img width="20%" align="right" alt="bricks" src="src/assets/icons/Bricks.svg" />

# Steinchen

> ## Brickies

An app for kids as well as adults, fans and collectors. Here you can save, view, and manage your bricks collection. A detailed set view gives you information about the associated theme, the number of parts and the year of release. In the brick overview you can view all the bricks of your sets.

### Here you can view and test the app:

https://steinchen.herokuapp.com/

## Installing / Getting started

`npm install` : Installs the required dependencies.

In the project directory, you can then run:

`npm run client:dev` : Runs the app in development mode to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

`npm run server:dev` : Runs the server in development mode.

`npm run storybook` : Runs storybook in development mode.

`npm run dev` : These scripts run your server, client and storybook all at once in development mode.

### The default PORTS are:

- `3001` for the server
- `3000` for the client
- `6006` for the storybook

### 📜 .env

You shall use `dotenv` to securely connect with MongoDB and Rebrickable API.

You can request an own API key here: https://rebrickable.com/api/

## Building

`npm run build` : This will build the client, server and storybook for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

`npm start` : Runs the server in production mode and serve production bundle from npm run build

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/storybook` is the storybook.  
`/*` is the client.

## Tests

A test runner is not installed (right now). But TypeScript, linter and prettier are checked on commit and push thanks to husky and lintstaged.
