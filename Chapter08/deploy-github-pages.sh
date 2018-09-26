# For GitHub Pages (rename to deploy.sh before use; make changes as suggested in chapter)

# !/usr/bin/env sh

# aborting on errors
set -e

# building
npm run docs:build

# navigating to the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# be sure to add proper CNAME records to your domain 
echo 'www.myfancydomain.com' > CNAME-record-here
 
git init
git add -A
git commit -m 'deploy'

# if deploying to https://yourusername.github.io
git push -f git@github.com:yourusername/yourusername.github.io.git master
 
# or if deploying to https://username.github.io/reponame
git push -f git@github.com:username/repo.git master:gh-pages
