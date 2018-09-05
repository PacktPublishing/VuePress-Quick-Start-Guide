// goes in .vuepress/config.js
 module.exports = {
  themeConfig: {
    sidebar: {
      '/testx/': [
        '', /* /testx/readme.md */
        'one', /* /testx/one.md */
        ],
 
      '/testxy/': [
        '', /* /testxy/readme.md */
       'two' /* /testxy/two.md */
      ],
 
      // fallback
      '/': [
        '',   /* readme.md at / */
        'about'   /* /about.md */
      ]
    }
  }
 }
