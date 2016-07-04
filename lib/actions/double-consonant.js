(() => {

  'use strict';

  let Action = require('./action.js');

  class DoubleConsonant extends Action {

    constructor() {

      super(8);

    }

    do(sb) {

      sb.addRandom([
        'cc', 'dd', 'ff', 'gg', 'll', 'mm',
        'nn', 'pp', 'rr', 'ss', 'tt'
      ]);

      return true;

    }

    canDo(sb, length) {

      if (sb.length + 2 >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return false;

      }

      if (!sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  }

  module.exports = new DoubleConsonant();

})();
