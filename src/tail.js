const tail = (array) => {
        if(array.length==0)
            return array;
        else
        {
            array.shift();
            return array;
        }
}
module.exports = tail;