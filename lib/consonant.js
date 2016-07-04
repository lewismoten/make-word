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

      sb.addConsonant();

      return true;

    },

    willDo() {

      return Math.random() < 0.2;

    },

    canDo(sb, length) {

      if (sb.length >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return true;

      }

      if (sb.addedVowel) {

        return true;

      }

      return true;

    }

  };

})();
