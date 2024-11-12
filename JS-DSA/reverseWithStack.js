let data = [];
let currentSize = data.length;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(string) {
  //   console.log(string);
  for (let i = 0; i < string.length; i++) {
    push(string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    // console.log(pop());
    string[i] = pop();
  }
}

let str = "Shubhu";
str = str.split("");

// push(20);
// push(22);
// push(78);
// pop();

reverseStr(str);
console.log(str.join(""));
// console.log("Stack", data);
