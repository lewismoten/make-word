(() => {

  'use strict';

  let Vowel = require('./vowel.js');

  class VowelDigraphs extends Vowel {

    constructor() {

      super(75);

    }

    do(sb) {

      sb.addRandom([
        'ai', 'au', 'aw', 'ay', 'ea', 'ee', 'ei', 'eu',
        'ew', 'ey', 'ie', 'oi', 'oo', 'ou', 'ow', 'oy'
      ]);

    }

    canDo(sb) {

      return super.canDo(sb) && sb.freeSpace >= 2 && !sb.isEmpty;

    }

  }

  module.exports = VowelDigraphs;

})();
