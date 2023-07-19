class Node{
    constructor(val)
    {
        this.data = val;
        this.next = null;    
    }

}

class Queue
{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val)
    {
        let newnode = new Node(val);
        if(!this.first)
        {
            this.first = newnode;
            this.last = newnode;
        }
        else
        {
            this.last.next = newnode;
            this.last = newnode;
        }
        return ++this.size;
    }

    dequeue()
    {
        let temp = this.first;
        if(this.first===this.last)
        {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.data;    
    }    
}

let q = new Queue();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.dequeue());
