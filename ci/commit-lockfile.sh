#!/bin/bash

echo "What is going on ?"

git status
ls -lah

if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
	exit 0
fi

if ! git diff-index --quiet HEAD --; then
  echo "Commit and push lockfile"
  git status
  ls -lah

  # git checkout $TRAVIS_PULL_REQUEST_BRANCH
  git config --global user.email "$GITHUB_EMAIL"
  git config --global user.name "Travis CI"
  git config --global push.default simple

  git add package-lock.json
  git commit -m "chore(*): update lockfile"
  git push
fi
