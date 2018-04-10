#!/bin/bash

if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
	exit 0
fi

if ! git diff-index --quiet HEAD --; then
  git config --global user.email "$GITHUB_EMAIL"
  git config --global user.name "Travis CI"
  git config --global push.default simple

  git add package-lock.json
  git commit -m "chore(*): update lockfile"
  LAST_COMMIT=`git rev-parse HEAD`
  git remote
  git push origin $LAST_COMMIT:$TRAVIS_PULL_REQUEST_BRANCH
fi
