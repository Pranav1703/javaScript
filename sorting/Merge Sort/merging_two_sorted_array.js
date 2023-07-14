function merge(arr1,arr2){
    let res = [];
    let i =0;
    let j=0;
    let k = 0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            res[k] = arr[j];
            j++;
        }
        else{
            res[k] = arr[i];
            i++;
        }
        k++;
    }
    while(i<arr1.length){
        res[k] = arr[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        res[k] = arr[j];
        j++;
        k++;
    }
    
}
