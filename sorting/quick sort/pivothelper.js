function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function pivotHelper(arr,start =0,end = arr.length-1){
    let pivot = arr[start];
    let swapIndex = start;
    for(let i=0;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex;
}
