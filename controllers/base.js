'use strict';

const axios = require('axios');
const commit = require('../service/commit/commit');
const sites = require('../service/sites/sites');

module.exports = function *(req, res) {
  const DOM = yield axios.get(sites[req.params.source]).then(response => response.data);

  const content = require('../parsers/' + req.params.source)(DOM);

  if (process.env.COMMIT !== 'false') {
    yield commit(req.params.source, content);
  }

  res.json(content);
};