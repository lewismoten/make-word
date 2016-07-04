(() => {

  'use strict';

  class Action {

    constructor(weight) {

      this._weight = weight || 50;

      if (new.target === Action) {

        throw new TypeError('Can not instantiate an abstract class.');

      }

      if (typeof this.do !== 'function') {

        throw new TypeError('Method not implemented: do(sb)');

      }

      if (typeof this.canDo !== 'function') {

        throw new TypeError('Method not implemented: canDo(sb)');

      }

    }

    get weight() {

      return this._weight;

    }

    canDo(sb) {

      return sb.freeSpace >= 1;

    }

  }

  module.exports = Action;

})();
