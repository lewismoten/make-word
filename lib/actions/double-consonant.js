(() => {

  'use strict';

  module.exports = {

    do(sb, length) {

      if (!this.canDo(sb, length)) {

        return false;

      }

      sb.addRandom([
        'cc', 'dd', 'ff', 'gg', 'll', 'mm',
        'nn', 'pp', 'rr', 'ss', 'tt'
      ]);

      return true;

    },

    get weight() {

      return 10;

    },

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

  };

})();
