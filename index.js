(() => {

  'use strict';

  let StringBuilder = require('./lib/string-builder.js'),
    consonantAction = require('./lib/consonant.js'),
    doubleConsonantAction = require('./lib/double-consonant.js'),
    vowelAction = require('./lib/vowel.js');

  module.exports = (min, max) => {

    let length = randomNumber(min || 8, max || 8),
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
