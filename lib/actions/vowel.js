(() => {

  'use strict';

  module.exports = {

    do(sb, length) {

      if (!this.canDo(sb, length)) {

        return false;

      }

      sb.addRandom('aeiou');

      return true;

    },

    get weight() {

      return 50;

    },

    canDo(sb, length) {

      if (sb.length >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return true;

      }

      if (sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  };

})();
