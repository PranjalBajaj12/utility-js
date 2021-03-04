const maxs = require('./max');

describe('Max',() => {

    it('Maximum element of empty array is null',() => {
        expect(maxs([])).toEqual(undefined);
    })
})