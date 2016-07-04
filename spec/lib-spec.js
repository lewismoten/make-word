/* eslint-env node, jasmine */
(() => {

  'use strict';

  let lib = require('../');

  describe('lib', () => {

    it('works', () => {

      lib();

    });

    it('has a default length of 8', () => {

      let result = lib();

      expect(result.length).toBe(8);

    });

  });

})();
