/* eslint-env node, jasmine */
(() => {

  'use strict';

  let lib = require('../lib');

  describe('lib', () => {

    it('works', () => {

      lib();

    });

    for (let i = 1; i < 8; i++) {

      it(`can be limited to ${i} characters`, () => {

        let result = lib(i, i);

        expect(result.length).toBe(i);

      });

    }

    for (let min = 1; min < 8; min++) {

      for (let max = min + 1; max < 8; max++) {

        it(`can be limited between ${min} and ${max} characters`, () => {

            let result = lib(min, max);
            expect(result.length).not.toBeLessThan(min);
            expect(result.length).not.toBeGreaterThan(max);

        });

      }

    }

    it('has a default length of 8', () => {

      let result = lib();

      expect(result.length).toBe(8);

    });

    it('show a failure...', () => {

      let result = lib();

      expect(result).toBe('');

    });

  });

})();
