function insertionSort(arr){
   for(let i=1;i<arr.length;i++){
       x = arr[i];
       j=i-1;
       while(j>=0 && arr[j] > x){
           arr[j] = arr[j-1];
           j--;
       }
       arr[j+1] = x;
   }
}
