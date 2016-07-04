(() => {

  'use strict';

  class StringBuilder {

    constructor() {

      this.text = '';

    }

    toString() {

      return this.text;

    }

    get length() {

      return this.text.length;

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

  }

  module.exports = (min, max) => {

    let length = 0,
      random,
      minimumLength = min || 8,
      maximumLength = max || 8,
      addedVowel = false,
      isFirstLetter = true,
      sb = new StringBuilder();

    length = Math.round(Math.random() * (maximumLength - minimumLength)) + minimumLength;

    while (sb.length < length) {

      random = Math.round(Math.random() * 100);

      // 10% Double Consonants
      if (!isFirstLetter && addedVowel && random < 10 && sb.length < length - 2) {

        sb.addDoubleConsonant();
        addedVowel = false;

      } else if ((isFirstLetter || addedVowel) && random < 90) {

        sb.addConsonant();
        addedVowel = false;

      } else {

        sb.addVowel();
        addedVowel = true;

      }

      isFirstLetter = false;

    }

    return sb.toString();

  };

  function getRandom(text) {

    return text[Math.floor(Math.random() * text.length)];

  }

})();
