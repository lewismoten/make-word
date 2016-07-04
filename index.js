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
      random,
      minimumLength = min || 8,
      maximumLength = max || 8,
      addedVowel = false,
      isFirstLetter = true;

    length = Math.round(Math.random() * (maximumLength - minimumLength)) + minimumLength;

    while (password.length < length) {

      random = Math.round(Math.random() * 100);

      // 10% Double Consonants
      if (!isFirstLetter && addedVowel && random < 10) {

        letter = getRandom(doubleConsonants);
        password += letter + letter;
        addedVowel = false;

      } else if ((isFirstLetter || addedVowel) && random < 90) {

        // 80% Consonants
        password += getRandom(singleConsonants);
        addedVowel = false;

      } else {

        // 10% vowels
        password += getRandom(vowels);
        addedVowel = true;

      }

      isFirstLetter = false;

    }

    if (password.length > maximumLength) {

      password = password.substring(0, maximumLength);

    }

    return password;

  };

  function getRandom(text) {

    return text[Math.floor(Math.random() * text.length)];

  }

})();
