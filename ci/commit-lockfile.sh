#!/bin/bash

echo `git status`
echo `git diff`

echo "Should package-lock.json be regenerated?"
# if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
# 	# Not a GreenKeeper Pull Request, aborting
# 	exit 0
# fi

echo "Cloning repo"
git clone "https://"$GITHUB_TOKEN"@github.com/"$TRAVIS_REPO_SLUG".git" repo
cd repo

echo "Switching to branch $TRAVIS_PULL_REQUEST_BRANCH"
git checkout $TRAVIS_PULL_REQUEST_BRANCH

echo "Updating lockfile"
npm i

if ! git diff-index --quiet HEAD --; then
  echo "Commit and push package-lock.json"
  git config --global user.email "$GITHUB_EMAIL"
  git config --global user.name "Travis CI"
  git config --global push.default simple

  git add package-lock.json
  git commit -m "chore(*): update yarn.lock"
  git push
fi
