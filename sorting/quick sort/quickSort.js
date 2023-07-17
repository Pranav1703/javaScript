function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function pivotHelper(arr,start =0,end = arr.length-1){
    let pivot = arr[start];
    let swapIndex = start;
    for(let i=0;i<=end;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex;
}

function quickSort(arr,left = 0,right = arr.length - 1){
    if(left<right){
        let pivotIndex = pivotHelper(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quicksort(arr,pivotIndex+1,right);
    }
    return arr;
}
