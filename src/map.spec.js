const map = require('./map');

const cube = (a) => {
    return a*a*a;
}


describe("Map", () => {
    it("Mapping of an empty array is []", () => {
        expect(map([],cube)).toEqual(expect.arrayContaining([]));
    })
})