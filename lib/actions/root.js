(() => {

  'use strict';

  let Action = require('./action.js'),
    roots = [
      'anthro', 'aqua', 'arch', 'astro', 'bene', 'bibl', 'bio', 'cap',
      'cep', 'ceive', 'chrom', 'chron', 'circum', 'clud', 'clus', 'corp',
      'cred', 'cycl', 'demo', 'dict', 'dom', 'duc', 'fact', 'fect',
      'fer', 'flect', 'flex', 'fort', 'frac', 'frag', 'frat', 'gen',
      'geo', 'gram', 'graph', 'gress', 'leg', 'ject', 'log', 'luc',
      'mal', 'manu', 'mani', 'mar', 'mater', 'matri', 'med', 'mega',
      'min', 'mit', 'miss', 'mort', 'nas', 'nat', 'neuro', 'nom', 'path',
      'pater', 'patri', 'ped', 'pod', 'phil', 'phon', 'photo', 'poli',
      'port', 'pos', 'psych', 'rect', 'reg', 'scope', 'scrib', 'scrip',
      'spec', 'struc', 'tact', 'tain', 'ten', 'tele', 'temp', 'tend',
      'tens', 'therm', 'trans', 'vac', 'ven', 'ver', 'vert', 'vers',
      'voc', 'vok'
    ];

  class Root extends Action {

    constructor() {

      super(34);

    }

    do(sb) {

      sb.addRandom(roots.filter(isValid, sb));

    }

    canDo(sb) {

      return super.canDo(sb) && roots.some(isValid, sb);

    }

  }

  function isValid(text) {

    return this.freeSpace >= text.length + 1 &&
      startsWithVowel(text) !== this.endsWithVowel;

  }

  function startsWithVowel(text) {

    return 'aeiou'.indexOf(text[0]) !== -1;

  }

  module.exports = Root;

})();
