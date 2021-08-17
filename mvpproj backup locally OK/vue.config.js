module.exports = {
  devServer: {
    proxy: {
    "/one": {
    target: "https://etherscan.io/",
    pathRewrite: { "^/one": "" },
    },
    "/two": {
    target: "https://bscscan.com/",
    pathRewrite: { "^/two": "" },
    },
    },
    },
};
