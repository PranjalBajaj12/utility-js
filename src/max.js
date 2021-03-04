const max = (array) =>{
    if(array.length==0)
        return undefined;
   else if(array.length==1)
      return array[0];
   else if(array.length==2)
      return (array[0]>array[1])?array[0]:array[1];
    else
    {
        const m = max(array.slice(1));
        return (array[0]>m)?array[0]:m;
    }
    return null;

}
module.exports=max;