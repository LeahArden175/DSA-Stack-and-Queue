class _Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data, null, this.last)
        if(this.first === null) {
            this.first = node
        }
        if(this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if(this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        this.first.prev = null
        if(node === this.last){
            this.last = null
        }
        return node.value
    }
}

function peek(stack) {
    if(!stack.first) {
        return null
    }
    return stack.first.value
}

function isEmpty(stack){
  if(!stack.first){
    return;
  }
}

function display(stack) {
  if(!stack.first){
    return;
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
peek(starTrekQ)


display(starTrekQ) //kirk spock uhura sulu checkov
