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
        'bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr',
        'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph',
        'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl',
        'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr',
        'tw', 'wh', 'wr', 'jh', 'ft'
      ]);

      return true;

    },

    willDo() {

      return Math.random() < 0.05;

    },

    canDo(sb, length) {

      if (sb.length + 2 >= length) {

        return false;

      }

      if (!sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  };

})();
