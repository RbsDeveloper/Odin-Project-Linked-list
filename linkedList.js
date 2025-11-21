class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adds a new node to the end of the linked list
    append(val){
        const node = new Node(val);

        if(!this.head){
            this.head = node;
            this.tail = this.head;
            
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.length++
        return this;
    }
   
}

let ls = new LinkedList();
console.log(ls);

ls.append(1)
ls.append(2)
ls.append(3)
console.log(ls)

