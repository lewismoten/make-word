(() => {

  'use strict';

  let Action = require('./action.js');

  class Vowel extends Action {

    constructor() {

      super(50);

    }

    do(sb) {

      sb.addRandom('aeiou');

    }

    canDo(sb) {

      if (sb.freeSpace < 1) {

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
