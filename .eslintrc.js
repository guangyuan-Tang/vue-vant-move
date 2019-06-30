module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"], //(, "@vue/prettier" ) 如果需要eslin把括号内容粘贴至数组内即可
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
