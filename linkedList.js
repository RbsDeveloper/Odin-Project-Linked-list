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
    //It Returns the node at the given index (iterative v)
    indexAt(idx){
        
        if(idx < 0 || idx >= this.length) return null
        
        let nodeAtIdx = this.head;
        for(let i = 0; i< idx; i++){
            nodeAtIdx = nodeAtIdx.next;
        }
        return nodeAtIdx;
    }

    //It Returns the node at the given index (recursive v)
    indexAtRecursive(idx, node = this.head){
        if(idx<0 || idx >= this.length) return null
        if(idx === 0) return node

        return this.indexAtRecursive(idx-1, node.next)
    }

    //It pops the last element of the linked List 
    pop(){
        
        let oldTail

        if(!this.head) return undefined;

        if(this.length === 1){
            oldTail = this.head
            this.head = null;
            this.tail = null;
        }else{
            
            let current = this.head;

            for(let i = 0; i < this.length-2; i++){
                current = current.next
            }

            oldTail=current.next;
            this.tail = current;
            current.next = null;
        }

        this.length--
        return oldTail;
    }
    //Returns true if the passsed val is in the list, otherwise false. 
    contains(value){
        let current = this.head;
        
        while(current){
            if(current.value === value) return true
            current = current.next
        }
        return false;
    }
    //Returns true if the passsed val is in the list, otherwise false.(Recursive v)
    containsRec(value, start = this.head){
        if(!start) return false
        if(start.value === value) return true;

        return this.containsRec(value, start.next);
    }
    //Returns the index of the node containing value, or null if not found.
    find(value){
        if(!this.head) return null; 

        let current = this.head;
        let index = 0;
        
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++
        }

        return null
    }
    //Returns the index of the node containing value, or null if not found.(Recursive v)
    findRec(value, current = this.head, idx = 0){
        if(!current) return null;
        if(current.value === value) return idx
        
        return this.findRec(value, current.next, idx+1);    
    }
   
}

let ls = new LinkedList();
//console.log(ls);

ls.append(1)
ls.append(2)
ls.append(3)
// console.log(ls)

//console.log(ls.prepend(0));
//console.log(ls.size());
//console.log(ls.showHead());
//console.log(ls.showTail());

//console.log(ls.indexAt(0));
//console.log(ls.indexAt(2));
//console.log(ls.indexAt(4));
//console.log(ls.indexAtRecursive(4));
//console.log(ls.indexAtRecursive(2));
//console.log(ls.indexAtRecursive(0));
// console.log('popped node:', ls.pop());
// console.log(ls);
// console.log(ls.containsRec(2));
console.log(ls.findRec(2));