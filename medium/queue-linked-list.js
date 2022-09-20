/*
Implement queue using linked list

criteria
1. Have a push(element) method to add elements to queue
2. Have a pop() method to remove from front. Should return popped value.
*/

class Queue {

    header = {link: null};
    endPtr = null;

    constructor(){};

    push(element) {
      if (this.header.link === null) {
        const node = {
          value: element,
          link: this.header.link
        }
        this.header.link = node;
        this.endPtr = node;
      } else {
        const node = {
          value: element,
          link: null
        }
        this.endPtr.link = node;
        this.endPtr = node;
      }
      
      
    }

    pop() {
      if (this.header.link) {
        const node = this.header.link;
        this.header.link = this.header.link.link;
        return node.value;
      }
      else {
        return null;
      }
    }

    print() {
      let node = this.header.link;
      while(node) {
        console.log(node.value);
        node = node.link
      }
    }
}

const queue = new Queue();

queue.push(5);
queue.push(10);
queue.push(15);
console.log("popped: ", queue.pop());
queue.push(20);
queue.print();
console.log("popped: ", queue.pop());
queue.push(25);
queue.push(30);
console.log("popped: ", queue.pop());
console.log("popped: ", queue.pop());


queue.print();