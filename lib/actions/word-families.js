

(() => {

  'use strict';

  let two = [
      'an', 'ap', 'at', 'aw', 'ay', 'in', 'ip', 'it', 'op', 'ot', 'ug'
    ],
    three = [
      'ack', 'ain', 'ake', 'ale', 'all', 'ame', 'ank', 'ash', 'ate',
      'eat', 'ell', 'est', 'ice', 'ick', 'ide', 'ill', 'ine', 'ing',
      'ink', 'ock', 'oke', 'ore', 'uck', 'ump', 'unk'
    ],
    four = [
      'ight'
    ];

  module.exports = {

    do(sb, length) {

      if (!this.canDo(sb, length)) {

        return false;

      }

      if (!this.willDo()) {

        return false;

      }

      let delta = length - sb.length;

      switch (delta) {
        case 2:
          sb.addRandom(two);
          break;
        case 3:
          sb.addRandom(three);
          break;
        default:
          sb.addRandom(four);
          break;
      }

      return true;

    },

    willDo() {

      return Math.random() < 0.05;

    },

    canDo(sb, length) {

      let delta = length - sb.length;

      if (delta < 2 || delta > 4) {

        return false;

      }

      if (sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  };

})();
