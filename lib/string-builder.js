(()=> {

  'use strict';

  let rando = require('random-number-in-range');

  module.exports = class StringBuilder {

    constructor() {

      this.text = '';

    }

    toString() {

      return this.text;

    }

    get length() {

      return this.text.length;

    }

    get isEmpty() {

      return this.length === 0;

    }

    get lastChar() {

      return this.text[this.length - 1];

    }

    get endsWithVowel() {

      return 'aeiou'.indexOf(this.lastChar) !== -1;

    }

    addRandom(candidates) {

      this.text += candidates[rando(0, candidates.length)];

    }

  };


})();
