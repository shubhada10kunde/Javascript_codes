let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    console.log("Queue is full cant add " + newVal);
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("queue is already empty");
  }
}

function display() {
  console.log(queue);
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
dequeue();
display();
