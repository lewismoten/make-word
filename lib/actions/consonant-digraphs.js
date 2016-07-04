(() => {

  'use strict';

  let Action = require('./action.js');

  class ConsonantDigraphs extends Action {

    constructor() {

      super(85);

    }

    do(sb) {

      sb.addRandom([
        'bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr',
        'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph',
        'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl',
        'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr',
        'tw', 'wh', 'wr', 'jh', 'ft'
      ]);

    }

    canDo(sb) {

      if (sb.freeSpace < 2) {

        return false;

      }

      if (!sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  }

  module.exports = new ConsonantDigraphs();

})();
