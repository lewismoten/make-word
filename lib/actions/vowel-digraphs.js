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
        'ai', 'au', 'aw', 'ay', 'ea', 'ee', 'ei', 'eu',
        'ew', 'ey', 'ie', 'oi', 'oo', 'ou', 'ow', 'oy'
      ]);

      return true;

    },

    willDo() {

      return Math.random() < 0.05;

    },

    canDo(sb, length) {

      if (sb.length >= length - 2) {

        return false;

      }

      if (sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  };

})();
