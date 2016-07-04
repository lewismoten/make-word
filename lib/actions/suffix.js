(() => {

  'use strict';

  let Action = require('./action.js'),
    suffixes = [
      'er', 'or', 'ance', 'ence', 'ant', 'ent', 'ee', 'ess', 'ian',
      'ism', 'ics', 'ist', 'ity', 'ment', 'ness', 'ship', 'tion',
      'ation', 'ate', 'ify', 'ize', 'able', 'ible', 'al', 'ful',
      'ish', 'ive', 'ous', 'ious', 'ly', 'ally'
    ];

  class Suffix extends Action {

    constructor() {

      super(75);

    }

    do(sb) {

      sb.addRandom(suffixes.filter(isValid, sb));

    }

    canDo(sb) {

      return super.canDo(sb) && !sb.isEmpty && suffixes.some(isValid, sb);

    }

  }

  function isValid(text) {

    return this.freeSpace === text.length &&
      startsWithVowel(text) !== this.endsWithVowel;

  }

  function startsWithVowel(text) {

    return 'aeiou'.indexOf(text[0]) !== -1;

  }

  module.exports = Suffix;

})();
