'use strict';

const cheerio = require('cheerio');

module.exports = function (DOM) {
  const $ = cheerio.load(DOM);

  const content = [];

  $('h3').each((index, element) => {
    const words = $(element)
      .text()
      .replace(/\n|«|»|:|,|\?|!|\(|\)|-|\./g, '')
      .toLowerCase()
      .split(' ');

    words.forEach(word => {
      if (!['', '-'].includes(word) && isNaN(word)) {
        content.push(word);
      }
    });
  });

  return content;
};