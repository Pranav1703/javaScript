function oddValues(arr){
    newArr=[];
    if(aarr.length==0){
        return newArr;
    }
    if(arr[0]%2!=0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(oddValues(arr.slice(1)));
    return newArr;
}
