(() => {

  'use strict';

  let Action = require('./action.js');

  class VowelDigraphs extends Action {

    constructor() {

      super(75);

    }

    do(sb) {

      sb.addRandom([
        'ai', 'au', 'aw', 'ay', 'ea', 'ee', 'ei', 'eu',
        'ew', 'ey', 'ie', 'oi', 'oo', 'ou', 'ow', 'oy'
      ]);

      return true;

    }

    canDo(sb, length) {

      if (sb.length >= length - 2) {

        return false;

      }

      if (sb.isEmpty) {

        return false;

      }

      return !sb.endsWithVowel;

    }

  }

  module.exports = new VowelDigraphs();

})();
