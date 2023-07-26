class binaryHeap
{
    constructor()
    {
        this.values = [];
    }

    insert(ele)
    {
        this.values.push(ele);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.values.length-1;
        const element = this.values[index];
        while(index > 0)
        {
            let parentIdx = Math.floor((index-1)/2);
            let parent =this.values[parentIdx];
            if(element <= parent)
            {
                break;
            }
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;

        }
    }

    extractMax()
    {
        
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length>0)
        {
            this.values[0] = end;
            this.sinkDown();
        }
        return max
    }

    sinkDown()
    {
        let idx = 0 ;
        const length = this.values.length;
        const element = this.values[idx];
        while(true)
        {
            let right = 2*idx+2;
            let left = 2*idx+1;
            let swap = null;
            let leftChild,rightChild;
            if(left < length)
            {
                leftChild = this.values[left];
                if(leftChild>element)
                {
                    swap = left;
                }
            }
            if(right<length)
            {
                rightChild = this.values[right];
                if((swap===null && rightChild > element) ||
                   (swap!==null && rightChild > leftChild))
                {
                    swap = right;
                }
            }
            if(swap===null){break};
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new binaryHeap();
heap.insert(42);
heap.insert(6);
heap.insert(55);
heap.insert(18);
heap.insert(24);
heap.insert(35);
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
