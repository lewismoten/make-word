(() => {

  'use strict';

  let Action = require('./action.js');

  class Vowel extends Action {

    constructor(weight) {

      super(weight || 50);

    }

    do(sb) {

      sb.addRandom('aeiou');

    }

    canDo(sb) {

      return super.canDo(sb) && (sb.isEmpty || !sb.endsWithVowel);

    }

  }

  module.exports = Vowel;

})();
