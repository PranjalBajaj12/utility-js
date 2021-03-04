const min = require('./min');

describe('Min',() => {

        it('Minimum element of empty array is undefined',() => {
            expect(min([])).toEqual(undefined);
        })

        it('Minimum element of [1,2,3,4] is 1',() => {
                expect(min([1,2,3,4])).toEqual(1);
        })
})