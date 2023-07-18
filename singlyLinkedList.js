class Node{
    constructor(val){
        this.data = val;
        this.next = null; 
    }
}

class singlyLinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    
    push(val){ //insert
        let newnode = new Node(val);
        if(!this.head){
            this.head = newnode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }
    
    print(){
        let current = this.head;
        let elements = [];
        while(current){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements);
    }
    
    pop(val){ //deleting the last node
        if(!this.head){
            return null;
        }
        let current = this.head;
        let newtail = null;
        while(current.next){
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length===0)
        {
            this.head = null;
            this.tail = null;
        }
        return current.data;
    }
    
    shift()//deleting the first node
    {
        if(!this.head)
        {
            return null;
        }
        let oldhead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length===0)
        {                       //head will be null after shifting if there is only one element in the list
           this.tail = null;
        }
        return oldhead.data;
    }

    unshift(val)//insert at beginning
    {
        let newnode = new Node(val)
        if(!this.head)
        {
            this.head = newnode;
            this.tail = this.head;
        }
        else
        {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
    }

    get(index) //indexing starts from 0
    {
        if(index < 0 || index >= this.length)
        {
            return null;
        }
        let current = this.head;
        let counter =0;
        while(counter!==index)
        {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index,val)
    {
        let targetNode = this.get(index);
        if(targetNode)
        {
            targetNode.data= val;
            return true;
        }
        return false;
    }

    insert(index,val)
    {
        if(index<0 || index > this.length)
        {
            return false;
        }
        if(index === this.length)
        {
            this.push(val);
            return true;
        }
        if(index ===0)
        {
            this.unshift(val);
            return true;
        }
        else
        {
            let prev = this.get(index-1);
            let newnode = new Node(val);
            newnode.next = prev.next;
            prev.next = newnode;
            this.length++;
        }
    }

    remove(index)
    {
        if(index < 0 || index > this.length)
        {
            return null;
        }
        if(index === this.length-1)
        {
            return this.pop();
            
        }
        if(index === 0)
        {
            return this.shift();
            
        }
        let prev = this.get(index-1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed.data;
    }
    
    reverse()
    {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev=null;;
        let next;
        for(let i =0;i<this.length;i++)
        {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
}

//driver code
let list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log("list:");
list.print();
console.log("poped node -"+list.pop());
list.print();
console.log("this is the node that has been shifted-"+ list.shift());
list.print();
list.unshift(5);
console.log("after unshifting:")
list.print();
console.log(list.get(1));
list.print();
console.log(list.set(2,69));
list.print();
list.insert(3,420);
console.log("After insertion:");
list.print();
list.reverse();
list.print();

