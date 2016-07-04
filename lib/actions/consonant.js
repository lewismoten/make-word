(() => {

  'use strict';

  let Action = require('./action.js');

  class Consonant extends Action {

    constructor() {

      super(40);

    }

    do(sb) {

      sb.addRandom('bcdfghjklmnprstv');

      return true;

    }

    canDo(sb, length) {

      if (sb.length >= length) {

        return false;

      }

      if (sb.isEmpty) {

        return true;

      }

      if (!sb.endsWithVowel) {

        return false;

      }

      return true;

    }

  }

  module.exports = new Consonant();

})();
