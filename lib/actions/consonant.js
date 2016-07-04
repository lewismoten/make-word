(() => {

  'use strict';

  let Action = require('./action.js');

  class Consonant extends Action {

    constructor() {

      super(40);

    }

    do(sb) {

      sb.addRandom('bcdfghjklmnprstv');

    }

    canDo(sb) {

      if (sb.freeSpace < 1) {

        return false;

      }

      return sb.isEmpty || sb.endsWithVowel;

    }

  }

  module.exports = new Consonant();

})();
