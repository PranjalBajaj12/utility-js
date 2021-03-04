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

     it('Mapping of an array [1,2,3] with cube function is [1,8,27]',() => {
             expect(map([1,2,3],cube)).toEqual(expect.arrayContaining([1,8,27]));
     })

       it('Mapping of an array [a{x : 10}] with a->a.x+1 is [11]', () => {
             const a = [{x:10}]
             expect(map(a,function(a,x){
                 return a.x=a.x+1;
             })).toEqual(expect.arrayContaining([11]));
         })
})