// stack linear data structure
let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    console.log("stack is full, you cant add " + newVal);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
  }
}
function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.log("stack is already empty");
  }
}

push(10);
push(20);
// push(30);
// push(40);
// push(50);
// push(60);
// push(70);
pop();
pop();
pop();
console.log(data);
