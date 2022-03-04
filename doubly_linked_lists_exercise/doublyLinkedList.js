function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){
 let newNode = new Node(val);
// in empty case
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  }
//   case not empty 
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
    
    // increment the length

  this.length++;

  return this;
}
DoublyLinkedList.prototype.unshift = function (val) {

};

DoublyLinkedList.prototype.insert = function(index, val){
    
}


DoublyLinkedList.prototype.getNode = function(index){
   
}

DoublyLinkedList.prototype.get = function(index){
    
}

DoublyLinkedList.prototype.set = function(index, val){
    
}

DoublyLinkedList.prototype.pop = function () {
  // handle empty case 
     if (!this.head) {
    return undefined;
     }
  // first I saved the last item in temp to return it 
  const temp = this.tail;

  // then i removed the pointer to the prev item 
  this.tail.prev = this.tail;

  // then decrement lenght => deleteted the last item and return the deleted item 
  this.length--;
  
  // return the deleted item 
  return temp.val;
}

DoublyLinkedList.prototype.shift = function(){
    
}

DoublyLinkedList.prototype.remove = function (index) {

};


DoublyLinkedList.prototype.reverse = function(){
    
}