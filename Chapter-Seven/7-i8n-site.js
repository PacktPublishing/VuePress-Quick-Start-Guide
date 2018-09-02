//goes in .vuepress/config.js
module.exports = {
  locales: {
    // The default locale can use '/' as its path
    '/': {
      lang: 'en-US', // this will be set as the lang attribute in HTML
      title: 'Good Morning',
      description: 'English VuePress'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Bon Jour',
      description: 'French VuePress'
    }
     '/es/': {
      lang: 'es-ES',
      title: 'Buenos Dias',
      description: 'Spanish VuePress'
    }
  }
 }
