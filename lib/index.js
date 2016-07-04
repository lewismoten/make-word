(() => {

  'use strict';

  let StringBuilder = require('./string-builder.js'),
    actions = require('./actions');

  module.exports = (min, max) => {

    let length = randomNumber(min || 8, max || 8),
      sb = new StringBuilder(),
      actionable = getCandidates(actions, sb, length);

    while (actionable.length > 0) {

      let sum = actionable.reduce(sumWeights, 0),
        action = chooseAction(actionable, sum);

      action.do(sb, length);

      actionable = getCandidates(actions, sb, length);

    }

    return sb.toString();

  };

  function chooseAction(actions, sum) {

    let pivot = Math.random() * sum,
      chosen;

    actions.some((action) => {

      pivot -= action.weight;

      if (action.weight > pivot) {

        chosen = action;
        return true;

      }

      return false;

    });

    return chosen;

  }

  function getCandidates(actions, sb, length) {

    return actions.filter(action => action.canDo(sb, length));

  }

  function randomNumber(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

  }

  function sumWeights(sum, action) {

    return sum + action.weight;

  }


})();
