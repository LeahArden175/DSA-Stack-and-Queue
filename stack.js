class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}


class Stack {
    constructor(){
        this.top = null
    }
    push(data) {
        //if the stack is empty, then the node will be the top of the stack
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top
        }
        /* If the stack already has an item then create a new node
        add data to the new node
        and have the pointer point to the top*/
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop(data){
        /*in order to remove the top of the stack, you have to point
        the pointer to the next item in then stack and that next item
        becomes the top of the stack */

        const node = this.top;
        this.top = node.next;
        return node.data
    }
}

function peek(stack) {
  if(!stack.top){
    return null
  }
 return stack.top.data
}

function isEmpty(stack){
  return (!stack.top)
}

function display(stack){
  if(!stack.top){
    return null
  }
  let current = stack.top

  while(current.next !== null) {
    console.log(current.data)
    current = current.next
  }
  console.log(current.data)
}


let starTrek = new Stack()

starTrek.push('Krik')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
console.log("star trek", starTrek)

console.log(peek(starTrek))
console.log(isEmpty(starTrek))
console.log("###################")
display(starTrek)
