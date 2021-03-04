const reduce = require('./reduce');

describe('Reduce',() => {

        it('Reduce of an empty array [] with (x,y) =>  x+y is undefined',() => {
            expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
        })

})