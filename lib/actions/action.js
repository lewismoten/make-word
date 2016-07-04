(() => {

  'use strict';

  module.exports =

  class Action {

    constructor(weight) {

      this._weight = weight;

      if (new.target === Action) {

        throw new TypeError('Can not instantiate an abstract class.');

      }

      if (typeof this.do !== 'function') {

        throw new TypeError('Method not implemented: do(sb, length)');

      }

      if (typeof this.canDo !== 'function') {

        throw new TypeError('Method not implemented: canDo(sb, length)');

      }

    }

    get weight() {

      return this._weight;

    }

  };

})();
