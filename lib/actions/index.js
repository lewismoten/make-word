(() => {

  'use strict';

  let
    consonantDigraphs = require('./consonant-digraphs.js'),
    consonantTrigraphs = require('./consonant-trigraphs.js'),
    consonant = require('./consonant.js'),
    doubleConsonant = require('./double-consonant.js'),
    vowelDigraphs = require('./vowel-digraphs.js'),
    vowel = require('./vowel.js'),
    wordFamilies = require('./word-families.js');

  module.exports = [
    wordFamilies,
    consonantDigraphs,
    vowelDigraphs,
    consonantTrigraphs,
    vowel,
    consonant,
    doubleConsonant
  ];

})();
