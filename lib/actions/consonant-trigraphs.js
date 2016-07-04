(() => {

  'use strict';

  module.exports = {

    do(sb, length) {

      if (!this.canDo(sb, length)) {

        return false;

      }

      sb.addRandom([
        'nth', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr',
        'qui', 'que', 'quo', 'qua'
      ]);

      return true;

    },

    get weight() {

      return 50;

    },

    canDo(sb, length) {

      if (sb.length + 3 >= length) {

        return false;

      }

      if (!sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  };

})();
