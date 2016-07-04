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

      sb.addDoubleConsonant();

      return true;

    },

    willDo() {

      return Math.random() < 0.8;

    },

    canDo(sb, length) {

      if (sb.isEmpty) {

        return false;

      }

      if (!sb.addedVowel) {

        return false;

      }

      if (sb.length >= length - 2) {

        return false;

      }

      return true;

    }

  };

})();
