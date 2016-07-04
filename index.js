(() => {

  'use strict';

  let StringBuilder = require('./lib/string-builder.js'),
    consonantAction = require('./lib/consonant.js'),
    doubleConsonantAction = require('./lib/double-consonant.js'),
    vowelAction = require('./lib/vowel.js');

  module.exports = (min, max) => {

    let minimumLength = min || 8,
      maximumLength = max || 8,
      length = randomNumber(minimumLength, maximumLength),
      sb = new StringBuilder(),
      actions = [
        doubleConsonantAction,
        consonantAction,
        vowelAction
      ];

    while (actions.some(action => action.do(sb, length))){}

    return sb.toString();

  };

  function randomNumber(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

  }


})();
