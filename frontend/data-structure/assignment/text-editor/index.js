module.exports = class TextEditor {
    constructor() {
        this.undoStack = "";
        this.redoStack = "";
        this.undoArrStack = [];
        this.redoArrStack = [];
    }

    write(c) {
        this.undoStack += c;
        this.undoArrStack.push(c);
    }

    read() {
        this.undoStack = "";
        for (let i = 0; i < this.undoArrStack.length; i++) {
            this.undoStack += (this.undoArrStack[i]);
        }
        return this.undoStack;
    }

    undo() {
        if (this.undoStack.length != 0) {
            var poopedValue = this.undoArrStack.pop();
            this.redoArrStack.push(poopedValue);
            this.undoStack = "";
            this.redoStack = "";
            for (let i = 0; i < this.undoArrStack.length; i++) {
                this.undoStack += this.undoArrStack[i];
    
            }
        }
    }


    
    redo() {
        var poopedValue = this.redoArrStack.pop();
        this.undoArrStack.push(poopedValue);
        this.redoStack = "";
        for (let i = 0; i < this.redoArrStack.length; i++) {
            this.redoStack += this.redoArrStack[i];
        }
    }
}
