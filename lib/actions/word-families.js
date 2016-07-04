(() => {

  'use strict';

  let sets = [
      [
        'an', 'ap', 'at', 'aw', 'ay', 'in', 'ip', 'it', 'op', 'ot', 'ug'
      ],
      [
        'ack', 'ain', 'ake', 'ale', 'all', 'ame', 'ank', 'ash', 'ate',
        'eat', 'ell', 'est', 'ice', 'ick', 'ide', 'ill', 'ine', 'ing',
        'ink', 'ock', 'oke', 'ore', 'uck', 'ump', 'unk'
      ],
      [
        'ight'
      ]
    ],
    Vowel = require('./vowel.js');

    class WordFamilies extends Vowel {

      constructor() {

        super(50);

      }

    do(sb) {

      sb.addRandom(sets[sb.freeSpace - 2]);

    }

    canDo(sb) {

      return super.canDo(sb) && sb.freeSpace >= 2 && sb.freeSpace <= 4;

    }

  }

  module.exports = WordFamilies;

})();
