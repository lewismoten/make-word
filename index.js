(() => {

  'use strict';

  module.exports = (min, max) => {

    let password = '',
      addConsonant = true,
      doubleConsonants = 'cdfglmnprst',
      singleConsonants = 'bcdfghjklmnprstv',
      letter = '',
      vowels = 'aeiou',
      length = 0,
      index = 0,
      random,
      minimumLength = min || 8,
      maximumLength = max || 8
      ;

    length = Math.round(Math.random() * (maximumLength - minimumLength)) + minimumLength;

    while (password.length < length) {

      random = Math.round(Math.random() * 100);

      // 10% Double Consonants
      if (password !== '' && addConsonant && random < 10) {

        index = Math.round(Math.random() * (doubleConsonants.length - 1));
        letter = doubleConsonants.substring(index, index + 1);
        password += letter + letter;
        addConsonant = false;

      } else if (password !== '' && addConsonant && random < 90) {

        // 80% Consonants

        index = Math.round(Math.random() * (singleConsonants.length - 1));
        letter = singleConsonants.substring(index, index + 1);
        password += letter;
        addConsonant = false;

      } else {

        // 10% vowels
        index = Math.round(Math.random() * (vowels.length - 1));
        letter = vowels.substring(index, index + 1);
        password += letter;
        addConsonant = true;

      }

    }

    if (password.length > maximumLength) {

      password = password.substring(0, maximumLength);

    }

    return password;

  };
  }

})();
