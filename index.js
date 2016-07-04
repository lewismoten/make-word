(() => {

  'use strict';

  let StringBuilder = require('./lib/string-builder.js');

  module.exports = (min, max) => {

    let length = randomNumber(min || 8, max || 8),
      sb = new StringBuilder(),
      actions = require('./lib/actions');

    while (actions.some(action => action.canDo(sb, length))) {

      // We can do an action

      while(!actions.some(action => action.do(sb, length))) {

        // we didn't do anything yet...

      }

    }

    return sb.toString();

  };

  function randomNumber(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

  }


})();
