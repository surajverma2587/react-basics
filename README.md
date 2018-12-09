# React Basics
Description here...

## Getting Started
The following steps should help you get started with building a bolierplate react application. At the end of all the steps you should have a basic react-app running in your web-browser which is the bolierplate react-app shipped by Facebook using the `create-react-app` tool.

**Note:** Skip the install node and npm if you already have it installed. You can use `node --version` to find the version of node installed and `npm ---version` to find the version of npm installed. Preferred node version is 10 and npm version is 6.

### Install Node & NPM
Steps to install and use the latest version of node:

- Download the nvm install script via cURL:
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- Ensure that nvm was installed correctly with `nvm --version`, which should return the version of nvm installed.
- Install the version of Node.js you want using `nvm install version_you_want`
- Install the latest version with `nvm install node`
- Use the latest version with `nvm use node`
- Install the latest LTS version with `nvm install --lts`
- Use the latest LTS verison with `nvm use --lts`

### Create React App
This should run the react-app in the browser under [http://localhost:3000](http://localhost:3000). The `npx` tool is a great tool to help execute one-off commands such as `create-react-app` which otherwise would have to be installed globally using `npm install create-react-app -g`. In order to start the app, navigate in to the directory which is the same as the project_name used in conjunction with `create-react-app`.
```bash
cd ~/Desktop/
npx create-react-app react-basics
cd react-basics
npm start
```

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
