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

      sb.addRandom('aeiou');

      return true;

    },

    willDo() {

      return Math.random() < 0.05;

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
