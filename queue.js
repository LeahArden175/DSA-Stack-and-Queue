// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data);

        if(this.first === null){
            this.first = node
        }
        if(this.last){
            this.last.next = node
        }
        //make the new node the last item on the queue
        this.last = node
    }

    dequeue() {
        //if the queue is empty, there is nothing to remove
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if(node === this.last){
            this.last = null
        }
        return node.value
    }
}


function peek(stack){
  if(!stack.first){
    return null
  }
  return stack.first.value
}

function isEmpty(stack){
  return (!stack.first)
}

function display(stack){
  if(!stack.first){
    return null
  }
  let current = stack.first

  while(current.next !== null){
    console.log(current.value)
    current = current.next
  }
  console.log(current.value)
}


let starTrekQ = new Queue()

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')
starTrekQ.dequeue('Spock')// kirk was removed

// peek(starTrekQ) kirk
// isEmpty(starTrekQ) false
// display(starTrekQ) //kirk spock uhura sulu checkov
