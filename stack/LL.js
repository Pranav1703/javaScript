class Node{
    constructor(val){
        this.data = val;
        this.next= null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newnode = new Node(val);
        if(!this.first)
        {
            this.first = newnode;
            this.last = newnode;
        }
        else
        {
            let temp = this.first;
            this.first = newnode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop()
    {
        if(!this.first)
        {
            return null;
        }
        let temp = this.first;
        if(this.first == this.last)
        {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let newstack =new Stack();
console.log(newstack.push(1));
console.log(newstack.push(2));
console.log(newstack.push(3));
console.log(newstack.pop());
