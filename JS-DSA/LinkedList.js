class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
    // console.log(this.head);
    // console.log(this.tail);
  }
  addNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traverse() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;

    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      this.size -= 1;
      // console.log(lead);
    }
  }

  insertNode(index, value) {
    if (index < 1 || index > this.size + 1) return;

    let counter = 1;
    let currentNode = this.head;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
    this.size += 1;
  }

  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    console.log(result);
  }
}

let list = new List(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
// list.traverse();
// list.deleteNode(2);
list.insertNode(4, 9000);
list.searchNode(400);
// console.log(list);
// console.log(JSON.stringify(list, null, 2));

console.log(this.size);
