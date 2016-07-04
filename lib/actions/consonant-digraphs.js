(() => {

  'use strict';

  let Consonant = require('./consonant.js');

  class ConsonantDigraphs extends Consonant {

    constructor() {

      super(85);

    }

    do(sb) {

      sb.addRandom([
        'bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr',
        'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph',
        'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl',
        'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr',
        'tw', 'wh', 'wr', 'jh'
        // ft - cant start a word...
      ]);

    }

    canDo(sb) {

      return super.canDo(sb) && sb.freeSpace >= 2;

    }

  }

  module.exports = ConsonantDigraphs;

})();
