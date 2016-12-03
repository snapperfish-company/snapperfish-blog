#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# rm -rf public

# config
git config --global user.email "travis@snapper.fish"
git config --global user.name "Travis CI"

# build (CHANGE THIS)
# npm run build

# deploy
ls $TRAVIS_BUILD_DIR
cd $TRAVIS_BUILD_DIR/public
git init
git add .
git commit -m "Deploy to Github Pages"
git remote add origin https://${GH_TOKEN}@github.com/snapperfish-company/snapperfish-company.github.io
git push -fq origin master
# git push --force "https://${GH_TOKEN}@github.com/snapperfish-company/snapperfish-company.github.io.git" master:master > /dev/null 2>&1