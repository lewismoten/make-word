(() => {

  'use strict';

  let StringBuilder = require('./string-builder.js'),
    actions = require('./actions'),
    rando = require('random-number-in-range');

  module.exports = (min, max) => {

    let length = rando(min || 8, max || 8),
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

  function chooseAction(availableActions, sum) {

    let pivot = rando(1, sum),
      chosen;

    availableActions.some((action) => {

      pivot -= action.weight;

      if (action.weight > pivot) {

        chosen = action;
        return true;

      }

      return false;

    });

    return chosen || availableActions[availableActions.length - 1];

  }

  function getCandidates(availableActions, sb, length) {

    return availableActions.filter(action => action.canDo(sb, length));

  }

  function sumWeights(sum, action) {

    return sum + action.weight;

  }


})();
