(() => {

  'use strict';

  let Action = require('./action.js');

  class ConsonantTrigraphs extends Action {

    constructor() {

      super(50);

    }

    do(sb) {

      sb.addRandom([
        'nth', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr',
        'qui', 'que', 'quo', 'qua'
      ]);

      return true;

    }

    canDo(sb, length) {

      if (sb.length + 3 >= length) {

        return false;

      }

      return sb.endsWithVowel;

    }

  }

  module.exports = new ConsonantTrigraphs();

})();
