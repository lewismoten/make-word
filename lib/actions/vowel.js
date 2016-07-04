(() => {

  'use strict';

  let Action = require('./action.js');

  class Vowel extends Action {

    constructor() {

      super(50);

    }

    do(sb) {

      sb.addRandom('aeiou');

      return true;

    }

    canDo(sb, length) {

      if (sb.length >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return true;

      }

      return !sb.endsWithVowel;

    }

  }

  module.exports = new Vowel();

})();
