const tail = require('./tail');

describe ('Tail',() => {
    it('Tail of empty list is []', () => {
        expect(tail([])).toEqual(expect.arrayContaining([]));
    })
     it('Tail of list [1,2,3,4] is [2,3,4]',() => {
            expect(tail([1,2,3,4])).toEqual(expect.arrayContaining([2,3,4]));
        })
})