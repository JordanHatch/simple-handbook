const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  return {
    dir: {
      input: '../',
      output: 'build/',
      layouts: '_site/layouts',
      data: '_site/data',
      includes: '_site/includes'
    }
  }
}
