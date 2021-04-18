# lint-lf

This is a cli for eslint & stylelint & commitlint;
User can install the personal lint by the cli automatically with less code;  
Any problem can be discussed on my GitHub;

**Waring**:  
Some of the lint files that your project already has will be overwritten by the cli right now. The next version will handle this problem;

steps:

1. npm install
2. `lint config` for start  
   after input or select the config and then the cli will create some lint rules automatically;  
   let's enjoy 'less code' !

**if your npm version > v5.2, you can use this cli without install by npx;**

```npm
  npx lint config
```

## todo

1. <del>逻辑分离</del>
2. js --> ts
3. 完善 ignore 文件列表 完善基础配置文件 完善 eslintrc 规则
4. <del>分离 all 依赖 使 eslint stylelint commitlint 可通过交互结果进行配置;</del>
5. 抽离依赖包 额外发布 npm 包 ?
6. npm --> pnpm ?
7. 支持 js/ts vue/react 的选择切换;
8. 支持 config 文件进行合并而不是暴力覆盖;
9. 增加 package json 中的脚本入口
