(() => {

  'use strict';

  let Action = require('./action.js');

  class Consonant extends Action {

    constructor(weight) {

      super(weight || 40);

    }

    do(sb) {

      sb.addRandom('bcdfghjklmnprstv');

    }

    canDo(sb) {

      return super.canDo(sb) && (sb.isEmpty || sb.endsWithVowel);

    }

  }

  module.exports = Consonant;

})();
