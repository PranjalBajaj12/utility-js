const filter = require('./filter');

describe('Filter',() => {

    it('Filter of an empty array is []',() => {
        expect(filter([],x => true)).toEqual(expect.arrayContaining([]));
    })
})