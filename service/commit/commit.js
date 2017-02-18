'use strict';

const git = require('gh-commit');
const moment = require('moment');

git.config.auth = {username: process.env.AUTH_USERNAME, password: process.env.AUTH_PASSWORD};
git.config.repo = {author: process.env.REPO_AUTHOR, name: process.env.REPO_NAME};

module.exports = function (source, content) {
  return git.commit([{
    path: source + '/' + moment().format('DD-MM-YYYY') + '.txt',
    content
  }]);
}