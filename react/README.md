# Webpack by Example - React

## TL;DR

This is a simple Webpack configuration for React. In order to run this application cd into the `react` folder and run from your command line:

`yarn install` or `npm install`

After all dependencies have installed from your command line run:

`npm run dev`

Open up your browser to `localhost:8080` and you should see `Webpack by Example - React` in the body of the html document.

## Learning Guide

You don't need Webpack to get started using React but with Webpack becoming the de facto standard for front end tooling it's easy to think why the two might be intrinsically linked. In this guide you will learn how to quickly get setup with Webpack in the simplest way possible. I put the example files inside of a details tag because I want to discourage you from copy pasta 😉. I think it would help you more if you actually tried to learn it. But don't take my word for it!

First, let's start with the package.json file and it's corresponding dependencies. Create a folder called `webpack-by-example-react` and `cd` into that folder. Then run: 

`npm init -y` 

This will create a `package.json` file and set all the default values for you like `name` and `version`.

Next let's install all the dependencies that we will need for this project. You probably want to use all the latest and greatest that React and JavaScript has to offer so you will be pulling in `babel` to transpile your code from ES2015+ to ES5. We also need React and Webpack, duh 🙄!

`yarn add react react-dom && yarn add --dev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 webpack webpack-dev-server` 
<br />
or
<br />
`npm i -S react react-dom && npm i -D babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 webpack webpack-dev-server`

Now that you have all of your dependencies you can now start coding, sorta. Create two directories `src` and `dist`. Also create a `.babelrc` file and a `webpack.config.js` file. 

Start in the `dist` folder and create an `index.html` file. Create a basic html file and then add a `div` with the `id` of `app` and a `script` tag with a `src` of `bundle.js`. `bundle.js` will be the name of your bundled JavaScript file.

<details>
<summary>index.html</summary>

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack by Example - React</title>
  </head>

  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>

</html>
```

</details>

Next you can begin configuring your webpack file. Open up your `webpack.config.js` file. It's an empty canvas at the moment. You first need to pull in the `path` library that comes prepacked with `npm`. Then you will create an object that will hold our configuration. The four main configurations are `entry`, `output`, `module`, and `devServer`. 

`entry` is the entry point of your application. You can have multiple entry points if your application is made up of different modules. But because React apps pull all modules into a single source, you will just have on entry for this application. If you need multiple entries, the entry key will be an array (`[]`) instead of a string (`""`).

`output` is where your JavaScript files will be bundled. You assign a `filename` and a `path`. For a production application you would add some type of hash to your `filename` so that any cached bundles are replaced in the browser with the latest bundle instead. For now you just need a regular `filename` since you are only working in development.

`module` is where the magic happens. You pass  different `rules` to `module` in order for files to be transpiled with the correct loader.

`devServer` is the server you will use to serve up your files and to recompile when any updates are made.

<details>
<summary>webpack.config.js</summary>

```
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    stats: "minimal"
  }
};
```

</details>


Based on your environment there are a set of presets that you will need to use some of the latest features of React and JavaScript. It is convention to set these presets in a `.babelrc` file since these presets and plugins can get pretty extensive. All you will need are `env`, `react`, and `stage-0`.

`env` works that same as `babel-preset-latest` which includes all the latest and greatest features from ES2015+. This includes arrow functions, generators, and async/await, just to name a few.

`react` handles presets for `react` so you can use features like JSX.

`stage-0` encompasses the latest and greatest features of JavaScript that are in the early phases of adoption, and that potentially could be or not be part of the language specification. `stage-0` includes everything above it as well, such as `stage-1`.

<details>
<summary>.babelrc</summary>

```
{
  "presets": ["env", "react", "stage-0"]
}
```

</details>



Now development can commence! In your `src` directory create a file called `whatisgoingonhere.js`. Just kidding, I was making sure you were paying attention 😄. You should have an idea of what the file in your `src` directory should be called. Hint: it's the same name you put for the `entry` key in your `webpack.config.js`. In your `index.js` file all you need is `react`/`react-dom`, a simple component to render to the screen.

<details>
<summary>index.js</summary>

```
import React from "react";
import { render } from "react-dom";

const App = () => <div>Webpack by Example - React</div>;

render(<App />, document.getElementById("app"));
```

</details>

And that is all you need to quickly and easily get setup with a React application using Webpack. Pretty easy, huh? 🙄. Don't you roll your eyes and me!
