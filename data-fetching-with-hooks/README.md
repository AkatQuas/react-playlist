# Playing on React Hooks

Basically, the `hooks` helps to free us from writing React Component in `class` style. It gives the power to modify some state in the old stateless component, aka the components without lifecycle.

And when wrapping the `useState`, `useEffect` functions into the customized hooks, it helps you to abstract the common state logic in different components, which means, these states are NOT shared between the components. Every of them has its own state.

Besides, `useReducers` can be treated as a integration for multiple `useState`, you can handle more complicated state logic that involves multiple sub-values or when the next state depends on the previous one. It's kind of a sugar syntax for writing multiple `useState`.

## Usage

```bash

# installation
npm i

# start the sever
npm run server

# start the web page
npm run start
```
