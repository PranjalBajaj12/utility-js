const reduce = (array,funcname,initial) => {
        if(array.length==0)
            return initial;
        var reduce_res = '';
             for (const val of array) {
                   reduce_res=(funcname.call(array,reduce_res,val));
             }
             return reduce_res;
}
module.exports=reduce;