// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.data = []
        this.top = -1
        this.size = 10
    }

    push(elemen) {
        // TODO: answer here
        if (this.data.length == this.size) {
            throw "stack overflow";
        } else {
            this.top += 1
            return this.data.push(elemen)
        }
    }

    pop() {
        // TODO: answer here
        if (this.top == -1) {
            throw "stack underflow";
        } else {
            let poppedValue = this.data.pop();
            this.top -= 1;
            return poppedValue;
        }
    }

    peek() {
        // TODO: answer here
        if (this.top == -1) {
            throw "stack is empty";
        } else {
            return this.data[this.top];
        }
    }
}
