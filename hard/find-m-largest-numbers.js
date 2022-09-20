/*
Given an array of 'n' numbers. Find 'm' largest numbers in it. 0 < m <= n

NOTE: The array will have atleast 'm' largest numbers.

input
array = [5, 15, 13, 8, 4, 10, 4, 12, 13, -1, -2, 0, 15];
m = 5

output
15
13
12
10
8
*/

const inputArray = [5, 15, 13, 8, 4, 10, 4, 12, 13, -1, -2, 0, 15];
const m = 5;

class DoubleLinkedList {
  startHeader = { llink: null, rlink: null };
  endHeader = { llink: null, rlink: null };
  limit = 0;

  constructor(limit) {
    this.limit = limit;
  }

  loopAndInsert(number) {
    let ptr = this.endHeader;
    do {
      if (number > ptr.rlink.value) {
        const node = { value: number, llink: ptr.rlink.llink, rlink: ptr.rlink };
        ptr.rlink.llink = node
        ptr.rlink = node;
        return 1;
      } else if (number === ptr.rlink.value) {
        return -1;
      }

      ptr = ptr.rlink;
    } while (ptr.rlink)

    return 0;
  }

  add(number) {
    if (this.limit === 0) {
      const status = this.loopAndInsert(number);
      if (status === 1) {
        this.startHeader.llink = this.startHeader.llink.llink;
        this.startHeader.llink.rlink = null
        
      }
      return;
    }

    if (this.endHeader.rlink === null) {
      const node = { value: number, llink: null, rlink: null };
      this.endHeader.rlink = node;
      this.startHeader.llink = node;
      this.limit--;
      return;
    }

    if (this.limit > 0) {
      const status = this.loopAndInsert(number);
      if (status === 0) {
        const node = { value: number, llink: this.startHeader.llink, rlink: null };
        this.startHeader.llink.rlink = node;
        this.startHeader.llink = node;
        this.limit--;
      } else if (status === 1) {
        this.limit--;
      }

      return;
    }
  }

  print() {
    let ptr = this.endHeader.rlink;
    while (ptr) {
      console.log(ptr.value);
      ptr = ptr.rlink;
    }
  }
}

const largest = new DoubleLinkedList(m);

for (const number of inputArray) {
  largest.add(number);
}

largest.print();

