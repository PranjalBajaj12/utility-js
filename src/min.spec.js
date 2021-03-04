const mins = require('./min');

describe('Min',() => {

        it('Minimum element of empty array is undefined',() => {
            expect(mins([])).toEqual(undefined);
        })
})