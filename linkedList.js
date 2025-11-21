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

    //Adds a new node to the beginnign of the linked list
    prepend(val){
        const node = new Node(val);

        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            let temp = this.head;
            node.next = temp;
            this.head = node;
        }

        this.length++
        return this
    }

     //Return the total numbers of nodes in the list
    size(){
        return this.length;
    }
    //Returns the firsts node in the list
    showHead(){
        return this.head;
    }
    //Returns the last node in the list
    showTail(){
        return this.tail;
    }
   
}

let ls = new LinkedList();
console.log(ls);

ls.append(1)
ls.append(2)
ls.append(3)
console.log(ls)

console.log(ls.prepend(0));
console.log(ls.size());
console.log(ls.showHead());
console.log(ls.showTail());