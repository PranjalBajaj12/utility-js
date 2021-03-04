const map = (array, funcname) => {
    if(array.length==0)
        return array;
    const map_res = [];
    for (const val of array) {
        map_res.push(funcname(val));
    }
    return map_res;
}
module.exports = map;