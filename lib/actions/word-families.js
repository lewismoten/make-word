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
      ],
      Action = require('./action.js');

    class WordFamilies extends Action {

      constructor() {

        super(50);

      }

    do(sb) {

      switch (sb.freeSpace) {
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

    }

    canDo(sb) {

      if (sb.freeSpace < 2 || sb.freeSpace > 4) {

        return false;

      }

      return !sb.endsWithVowel;

    }

  }

  module.exports = new WordFamilies();

})();
