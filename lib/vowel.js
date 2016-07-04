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

      sb.addVowel();

      return true;

    },

    willDo() {

      return true;

    },

    canDo(sb, length) {

      if (sb.length >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return true;

      }

      if (sb.addedVowel) {

        return false;

      }

      return true;

    }

  };

})();
