(() => {

  'use strict';

  let Consonant = require('./consonant.js');

  class ConsonantTrigraphs extends Consonant {

    constructor() {

      super(50);

    }

    do(sb) {

      sb.addRandom([
        'nth', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr',
        'qui', 'que', 'quo', 'qua'
      ]);

    }

    canDo(sb) {

      return super.canDo(sb) && sb.freeSpace >= 4;

    }

  }

  module.exports = ConsonantTrigraphs;

})();
