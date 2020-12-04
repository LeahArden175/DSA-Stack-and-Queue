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



class dancePartners {
    constructor(){
      this.maleQ = new Queue()
      this.femaleQ = new Queue()
    }
  
    queueDancer(string){
      const gender = string[0]
      const name = string.split(' ')[1]
  
      if(gender === 'F') this.femaleQ.enqueue(name)
      if(gender === 'M') this.maleQ.enqueue(name)
  
      if(this.femaleQ.first && this.maleQ.first){
        const fDancer = this.femaleQ.dequeue()
        const mDancer = this.maleQ.dequeue()
        console.log(`Female Dancer is ${fDancer} and  Male Dancer is ${mDancer}`)
      }
  
      if(this.femaleQ.first){
        let count = 1
        let current = this.femaleQ.first
  
        while(current.next !== null) {
          count++;
          current = current.next
        }
        console.log(`there are ${count} female dancers waiting to dance`)
      }
  
      if(this.maleQ.first){
        let count = 1
        let current = this.maleQ.first
  
        while(current.next !== null) {
          count++;
          current = current.next
        }
        console.log(`there are ${count} male dancers waiting to dance`)
      }
    }
  }
  
  const Dance = new dancePartners()
  
  Dance.queueDancer('F Jane');
  Dance.queueDancer('M Frank');
  Dance.queueDancer('M John');
  Dance.queueDancer('M Sherlock');
  Dance.queueDancer('F Madonna');
  Dance.queueDancer('M David');
  Dance.queueDancer('M Christopher');
  Dance.queueDancer('F Beyonce');

  function ophidianBank(queue){
    while(queue.first){
      let person = queue.dequeue()
      let random = Math.random()
      if(random < .25){
        queue.enqueue(person)
        console.log(`${person} paperwork is wrong`)
      } else {
        console.log(`${person} served`)
      }
    }
    console.log('everyone served')
  }

  ophidianBank(starTrekQ)