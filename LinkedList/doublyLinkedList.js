class Node{
    constructor(val)
    {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val)//adds at the end 
    {
        let newnode = new Node(val);
        if(!this.head)
        {
            this.head = newnode;
            this.tail = newnode;
        }
        else
        {
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }   
        this.length++;
        return this;
    }

    print()
    {
        let curr = this.head;
        let nodes = [];
        while(curr)
        {
            nodes.push(curr.data);
            curr=curr.next;
        }
        console.log(nodes);
    }

    pop()
    {
        if(!this.head)
        {
            return null;
        }
        let poppedNode = this.tail;
        if(this.length===1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = poppedNode.prev;//updating the tail;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(val)//removes a node from beginning
    {
        if(!this.head)
        {
            return null;
        }
        let oldHead = this.head;
        if(this.length===1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
            this.length--;
            return oldHead;
        }
    } 

    unshift(val) //inserting at the beginning
    {
        let newnode = new Node(val);
        if(this.length===0)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head.prev = newnode;
            newnode.next =  this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }

    get(index)//indexing from 0
    {
        if(index < 0 || index >= this.length)
        {
            return null;
        }
        if(index <=this.length/2)
        {
            let count =0;
            let curr = this.head;
            while(count!=index)
            {
                curr = curr.next;
                count++;
            }
            return curr;
        }
        else
        {
            let count = this.length-1;
            let curr = this.tail;
            while(count != index)
            {
                curr = curr.prev;
                count--;
            }
            return curr;
        }

    }

    set(index,val)
    {
        let foundNode = this.get(index);
        if(foundNode)
        {
            foundNode.data = val;
            return true;
        }
        return false;
    }

    insert(index , val)
    {
        if(index <0 || index >=this.length)
        {
            return null;
        }
        let newnode = new Node(val);
        if(index ===0)
        {
            return this.unshift(val);
        }
        if(index ===this.length)
        {
            return this.push;
        }
        let curr = this.get(index-1);
        newnode.next = curr.next;
        curr.next.prev = newnode;
        newnode.prev = curr;
        curr.next = newnode;
        this.length++;
        return;
    }

    remove(index)
    {
        if(index<0||index>=this.length)
        {
            return null;
        }
        if(index ===0)
        {
            return this.shift();
        }
        if(index ===this.length-1)
        {
            return this.pop();
        }
        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }
}


//driver code
let list = new doublyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(69);
list.push(420);
list.print()
console.log(list.pop());
console.log("After poping:");
list.print();
console.log(list.shift());
console.log("After shifting");
list.print();
list.unshift(1);
console.log("after unshifting:")
list.print();
console.log(list.get(2));
list.set(2,"set");
list.print();
list.insert(3,"inserted");
console.log("After inserting:");
list.print();
console.log(list.remove(3));
console.log("After removing:");
list.print();

