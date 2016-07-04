(() => {

  'use strict';

  let
    ConsonantDigraphs = require('./consonant-digraphs.js'),
    ConsonantTrigraphs = require('./consonant-trigraphs.js'),
    Consonant = require('./consonant.js'),
    DoubleConsonant = require('./double-consonant.js'),
    VowelDigraphs = require('./vowel-digraphs.js'),
    Vowel = require('./vowel.js'),
    WordFamilies = require('./word-families.js'),
    Root = require('./root.js'),
    Suffix = require('./suffix.js'),
    Prefix = require('./prefix.js');

  module.exports = [
    new WordFamilies(),
    new ConsonantDigraphs(),
    new VowelDigraphs(),
    new ConsonantTrigraphs(),
    new Vowel(),
    new Consonant(),
    new DoubleConsonant(),
    new Root(),
    new Suffix(),
    new Prefix()
  ];

})();
