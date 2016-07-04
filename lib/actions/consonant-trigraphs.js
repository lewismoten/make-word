(() => {

  'use strict';

  module.exports = {

    do(sb, length) {

      if (!this.canDo(sb, length)) {

        return false;

      }

      if (!this.willDo()) {

        return false;

      }

      sb.addRandom([
        'nth', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr',
        'qui', 'que', 'quo', 'qua'
      ]);

      return true;

    },

    willDo() {

      return Math.random() < 0.05;

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
