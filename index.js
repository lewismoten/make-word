(() => {

  'use strict';

  let StringBuilder = require('./lib/string-builder.js'),
    consonantAction = require('./lib/consonant.js'),
    doubleConsonantAction = require('./lib/double-consonant.js'),
    vowelAction = require('./lib/vowel.js');

  module.exports = (min, max) => {

    let random,
      minimumLength = min || 8,
      maximumLength = max || 8,
      length = Math.round(Math.random() * (maximumLength - minimumLength)) + minimumLength,
      addedVowel = false,
      isFirstLetter = true,
      sb = new StringBuilder();

    let actions = [
      doubleConsonantAction,
      consonantAction,
      vowelAction
    ];

    while(actions.some(action => action.do(sb, length))) {

      // just doing...
    }

    return sb.toString();

  };


})();
