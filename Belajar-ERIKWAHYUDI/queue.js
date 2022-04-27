class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
  
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
  
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
        return this.elements[this.head]; // menampilkan elemen pertama dari queue
      }
    
      get printQueue() {
        var str = "";
        for(var i = 0; i < this.length; i++)
            str += this.elements[i] +" ";
        return str;
      }
    
      get length() {
        return this.tail - this.head;
      }
    
      get isEmpty() {
        return this.length === 0;
      }
    }

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
console.log(q.printQueue); // result: 1 2 3 4 5 6 7 
console.log(q.length); // result: 7
console.log(q.peek()); // result: 1

// dequeue semua elemen
while (!q.isEmpty) {
  q.dequeue();
}

console.log(q.length); // result: 0