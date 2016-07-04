(() => {

  'use strict';

  let Consonant = require('./consonant.js');

  class DoubleConsonant extends Consonant {

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

      return super.canDo(sb) && sb.freeSpace >= 2 && !sb.isEmpty;

    }

  }

  module.exports = DoubleConsonant;

})();
