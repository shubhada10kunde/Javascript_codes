class Stack {
  item = [];
  currentSize;
  maxSize;

  constructor(size) {
    // console.log("call");
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("stack is full, cant add" + newVal);
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("stack is already empty");
    }
  }

  display() {
    console.log(this.item);
  }
}

stk = new Stack(5);

stk.push(20);
stk.push(24);
stk.push(27);
stk.push(206);
stk.push(2);
stk.push(25);

stk.pop();

stk.display();
