const map = require('./map');

const cube = (a) => {
    return a*a*a;
}
const identity = (a) =>
{
    return a;
}
describe("Map", () => {
    it("Mapping of an empty array is []", () => {
        expect(map([],cube)).toEqual(expect.arrayContaining([]));
    })

     it('Mapping of an array [1,2,3] with identity function is [1,2,3]',() => {
            expect(map([1,2,3],identity)).toEqual(expect.arrayContaining([1,2,3]));
        })
})