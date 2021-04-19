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

## comments

| Rules Name           | Value        | comments                                                                  |
| -------------------- | ------------ | ------------------------------------------------------------------------- |
| "trailingComma"      | "all"        | 在任何可能的多行中输入尾逗号                                              |
| "tabWidth"           | 2            | 设置工具每一个水平缩进的空格数                                            |
| "semi"               | true         | 在语句末尾添加分号                                                        |
| "singleQuote"        | true         | 使用单引号而非双引号                                                      |
| "jsxSingleQuote"     | true,        | JSX 中使用单引号                                                          |
| "endOfLine"          | "lf",        | 行尾序列使用 LF                                                           |
| "printWidth"         | 120          | 设置 prettier 单行输出（不折行）的（最大）长度                            |
| "bracketSpacing"     | true         | 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格                  |
| "arrowParens"        | "always"     | 为单行箭头函数的参数添加圆括号，参数个数为 1 时可以省略圆括号             |
| "quoteProps"         | "as-needed", | object 中 key 尽量不使用引号                                              |
| "useTabs"            | true         | 使用 tab（制表位）缩进而非空格                                            |
| "parser"             | "babylon"    | 指定使用哪一种解析器, 默认会自动选择                                      |
| "jsxBracketSameLine" | true         | 在多行 JSX 元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素） |
| "rangeStart"         | 0            | 只格式化某个文件的一部分                                                  |
| "rangeEnd"           | Infinity     | 只格式化某个文件的一部分                                                  |
| "filepath"           | "none"       | 指定文件的输入路径，这将被用于解析器参照                                  |
