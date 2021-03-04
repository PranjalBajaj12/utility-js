const reduce = require('./reduce');

describe('Reduce',() => {

        it('Reduce of an empty array [] with (x,y) =>  x+y is undefined',() => {
            expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
        })

        it('Reduce of an array [] with v(x,y) => x+y and intial value 10 is 10',() => {
                expect(reduce([],(x,y) => x+y,10)).toEqual(10);
        })

})