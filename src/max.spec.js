const max = require('./max');

describe('Max',() => {

    it('Maximum element of empty array is null',() => {
        expect(max([])).toEqual(undefined);
    })

    it('Maxi of [8,78,45,67] is 78',() => {
         expect(max([8,78,45,67])).toEqual(78);
    })

})