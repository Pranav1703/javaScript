//copied the binaryHeap file
class PrioritQueue
{
    constructor()
    {
        this.values = [];
    }

    enqueue(val,priority)
    {
        let newnode = new Node(val,priority)
        this.values.push(newnode);
        this.Heapify();
    }
    Heapify()//minheapify
    {
        let index = this.values.length-1;
        const element = this.values[index];
        while(index > 0)
        {
            let parentIdx = Math.floor((index-1)/2);
            let parent =this.values[parentIdx];
            if(element.priority >= parent.priority)//comparing priorities instead of values
            {
                break;
            }
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;

        }
    }

    dequeue()
    {
        
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length>0)
        {
            this.values[0] = end;
            this.sinkDown();
        }
        return min
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
                if(leftChild.priority<element.priority)
                {
                    swap = left;
                }
            }
            if(right<length)
            {
                rightChild = this.values[right];
                if((swap===null && rightChild.priority < element.priority) ||
                   (swap!==null && rightChild.priority < leftChild.priority))
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

class Node
{
    constructor(val,priority)
    {
        this.data = val;
        this.priority = priority
    }
}

let Q = new PrioritQueue();
Q.enqueue("fever",5);
Q.enqueue("flu",6);
Q.enqueue("pox",3);
Q.enqueue("cancer",0);
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.dequeue());   
