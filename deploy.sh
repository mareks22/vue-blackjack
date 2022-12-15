#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -addgit commit -m 'New Deployment'
git push -f git@github.com:mareks22/vue-blackjack.git main:gh-pages

cd-