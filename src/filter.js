const filter = (array,funcname) => {
    if(array.length==0)
        return array;
    const filter_res = [];
    for (const val of array) {
        if(funcname(val))
             filter_res.push(val);
      }
    return filter_res;
}
module.exports=filter;