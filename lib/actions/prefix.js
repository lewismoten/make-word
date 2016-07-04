(() => {

  'use strict';

  let Action = require('./action.js'),
    prefixes = [
      'anti', 'bi', 'contra', 'di', 'dis', 'ex', 'e', 'extra',
      'hyper', 'in', 'im', 'il', 'ir', 'inter', 'intra', 'intro',
      'macro', 'micro', 'mis', 'mono', 'multi', 'neo', 'non',
      'omni', 'poly', 'post', 'pre', 're', 'retro', 'semi',
      'sub', 'super', 'tri', 'un', 'uni'
    ];

  class Prefix extends Action {

    constructor() {

      super(75);

    }

    do(sb) {

      sb.addRandom(prefixes.filter(isValid, sb));

    }

    canDo(sb) {

      return super.canDo(sb) && sb.isEmpty && sb.freeSpace >= 2;

    }

  }

  function isValid(text) {

    return this.freeSpace >= text.length + 1;

  }

  module.exports = Prefix;

})();
