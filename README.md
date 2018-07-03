# algorithm-started

## 测试工具库：
- [测试框架：mocha](https://mochajs.org/)
- [断言库：power-assert](https://github.com/power-assert-js/power-assert)
- [power-assert instrumentor for TypeScript](https://github.com/power-assert-js/espower-typescript)


## 依赖安装：
`$ npm install -D espower-typescript power-assert mocha typescript @types/node @types/mocha`

## 运行依赖：
- `$ ./node_modules/.bin/mocha --require espower-typescript/guess "tests/**/*.ts"`
- `npm run test`


## 参考文章：
- [单元测试](https://eggjs.org/zh-cn/core/unittest.html)
- [Unit testing node applications with TypeScript — using mocha and chai](https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2)
- [power-assert instrumentor for TypeScript](https://github.com/power-assert-js/espower-typescript)