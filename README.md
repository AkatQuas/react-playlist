# Some points in this tutorial
Feel free to play or contact me!

## How to play
* `old-fashioned` folder, you can just open the `html` file in the browser and everything should be fine.
* `webpack-frame` folders, you need `cd` into one of them and `npm install` then `npm run dev`, everything should be fine. Though the `dev` command is kind of tricky because I keep the dist folder rather than a single `index.html` outside the dist folder, anthor thing to tackle.
* If you want to `npm run build`, at this moment(20/09/2017), I don't know the exact way how the webpack working. Cleaning the dist folder is kind of beyond me.

## About the tutorials

After a long time, I turn back to ReactJS. So I have to learn a lot of things from very start.

Many of them are from the official documentation examples.

## Start the webpack project manually
* create `package.json` via `npm init`.
* create `webpack.config.js`, configuring the basic config.
    * devServer, an amazing package, `npm install --save-dev webpack-dev-server`
    * `babel-loader` for js, choose the suitable preset, in this case, `latest, stage-0, react`.
    * `json-loader` for json, for mocking some simple json data.
    * `style-loader!css-loader!autoprefixer-loader` for css.
    * `style-loader!css-loader!autoprefixer-loader!sass-loader` for sass, you may need install `node-sass` as well.
* create some npm command in the `package.json`.

And then you are free to fly!

## Small tips on React
- `Class` should be name with PascalCase rather than camelCase or kabab-case.
- Several ways to create `Component`, `createReactClass` /  `extends React.Component` / `stateless functional Components`. It is a good way to use `stateless functional Components` which might have better performance.
- `react-icons` is an awesome icons library. 
- `prop-types` has been moved out of the `React` package to another individual package. See [this](https://github.com/facebook/prop-types#prop-types). It is not compulsory.
- `react-router`, something useful is in the `history` package.
- `Link` is in the `react-router-dom` package, maybe you need to install manually.
- `setState` is used to set some data to the component's state, rather than just give an assignment statement.
- in `Visual Studio Code`, add `"files.associations": { "*.js": "javascriptreact" }` to use the jsx syntax in react-related-js files.
- you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
- Using Typescript with Creat React App, just run `creat-react-app my-app --script-version=react-scripts-ts`.
- `Formatting Code Automatically`, read this [article](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically).
