module.exports = {
 locales: { /* ... */ },
 themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown in menu
        selectText: 'Languages',
        // label for this language in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // configuring Service Worker popup UI (optional)
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options (optional)
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      
     '/fr/': {
        // text for the language dropdown in menu
        selectText: 'Languages-text-in-french',
        // label for this language in the language dropdown
        label: 'French',
        // text for the edit-on-github link
        editLinkText: 'text-in-french',
        // configuring Service Worker popup UI (optional)
        serviceWorker: {
          updatePopup: {
            message: "text-in-french",
            buttonText: "Refresh-text-in-french"
          }
        },
        // algolia docsearch options (optional)
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        } }

    '/es/': {
        // text for the language dropdown in menu
        selectText: 'Languages-text-in-spanish',
        // label for this language in the language dropdown
        label: 'Spanish',
        // text for the edit-on-github link
        editLinkText: 'text-in-spanish',
        // configuring Service Worker popup UI (optional)
        serviceWorker: {
          updatePopup: {
            message: "text-in-spanish",
            buttonText: "Refresh-text-in-spanish"
          }
        },
        // algolia docsearch options (optional)
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        } }
    }
  }
 }
