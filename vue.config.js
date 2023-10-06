// git subtree push --prefix dist origin gh-pages
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Globalia/" : "/",
};