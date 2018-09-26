// goes in .vuepress/config.js
// be sure to modify options as per your VuePress setup 

 module.exports = {
  themeConfig: {
    // GitHub by default, provide full URLs for others.
    repo: 'repo-address-here',
    // Customize the header label that is shown in menu
    repoLabel: 'Contribute!',
 
    // Further options related to “Edit on Git” link
 
    // if docs are maintained in a separate repo:
    docsRepo: 'docs-repo-here-full-address',
    // if docs are in a sub-directory of main repo:
    docsDir: 'docs-directory-here',
    // if you do not want to use the Master branch on Git:
    docsBranch: 'master-or-branch-name',
    // do you want people to edit your docs? Boolean value
    editLinks: true,
    // modify the “edit this page” link that is shown
    editLinkText: 'Help me edit this page!'
  }
 }
