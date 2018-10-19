# drag-put

> A project named drag-put

# doc

<img src='./doc.jpg' width='300'/>

# Usage

```bash
# development
npm run dev

# production test
npm run build:test

# production build
npm run build:prod

# upload to upyun test
npm run upload:test

# upload to upyun prod
npm run upload:prod

# analyze the bundle
npm run analyze

# clear analyze 
npm run analyze:clean
```

# Features

* CI: when pushed to the git repository, CI/CD will be triggered.

* React in multiple pages development integrated with [styled-jsx](https://github.com/zeit/styled-jsx), postcss supported.

* Upload to [Upyun](https://www.upyun.com/) in CLI.

* Rem adaptive in mobile browser, [rem.js](./src/js/rem.js).

* Http requests with [axios](https://github.com/axios/axios). (I like the interceptors).

# TODO

- eslint

- pre-commit

- prettier

- SPA store managment [mobx]

# Customize Configuration

<details>

<summary> http request</summary>

check the [webpack.dev.config.js](./build/webpack.dev.config.js), rewrite the request url beginning with different words and proxy them to the test server.

</details>

<details>

<summary>entry js files</summary>

listed in [build/entry.js](./build/entry.js)

```javascript
const data = [
  {
    title: '访问目录',  
    name: 'index',
    type:'h5'
  },
  {   
    // 本地html的title
    title: '标题',

    // 本地开发时入口js文件的目录(src/pages/**)，会自动读取该目录下的index.js文件
    name: 'xxx',

    // 适配的html类型， 
    type: 'h5'
  }

];

module.exports.data = data;
```

</details>
