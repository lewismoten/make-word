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

    }

    canDo(sb) {

      if (sb.freeSpace < 2) {

        return false;

      }

      if (sb.isEmpty) {

        return false;

      }

      return sb.endsWithVowel;

    }

  }

  module.exports = new DoubleConsonant();

})();
