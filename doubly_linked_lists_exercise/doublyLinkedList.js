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
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  this.length++;

  return this;
};

DoublyLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let newNode = new Node(val);

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index - 1) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  currentNode.next.prev = newNode;
  currentNode.next = newNode;
  newNode.prev = currentNode;

  this.length++;

  return this.length;
};


DoublyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  return currentNode;
};
DoublyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  return node ? node.val : null;
};

DoublyLinkedList.prototype.set = function(index, val){
      let node = this.getNode(index);

  if (node) {
    node.val = val;
    return true;
  }

  return false;
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
     if (!this.head) {
    return undefined;
  }

  let temp = this.head;
  this.head = this.head.next;

  this.length--;

  return temp.val;
}

DoublyLinkedList.prototype.remove = function (index) {
if (index < 0 || index >= this.length) {
    return undefined;
  }

  let removedNode = null;

  if (this.length === 1) {
    removedNode = this.shift();
  } else {
    let deletedNode = this.getNode(index - 1);
    removedNode = deletedNode.next;
    deletedNode.next = deletedNode.next.next;
    removedNode.next = null;
  }

  this.length--;

  return removedNode;
};


DoublyLinkedList.prototype.reverse = function(){
     let previous = null;
  let next = null;
  
    let tail = this.tail;
    let current = this.head;
    tail = current

  while (current!== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
    let result  =   this.head = previous

    return result;
}