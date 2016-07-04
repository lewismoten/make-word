(()=> {

  'use strict';

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

    addDoubleConsonant() {

      let letter = getRandom('cdfglmnprst');
      this.text += letter + letter;

    }

    addConsonant() {

      this.text += getRandom('bcdfghjklmnprstv');

    }

    addVowel() {

      this.text += getRandom('aeiou');

    }

  };

  function getRandom(text) {

    return text[Math.floor(Math.random() * text.length)];

  }

})();
