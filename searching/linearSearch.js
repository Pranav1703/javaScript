function linearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return i;
            break;
        }
    }
    return -1;
}
