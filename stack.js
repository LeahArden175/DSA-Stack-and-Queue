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


/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*------------------PALINDROM QUESTION--------------------*/

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const stack = new Stack
    const reverseStack = new Stack

    for(let i = 0; i < s.length; i++) {
        stack.push(s[i])
    }
    for(let i = 0; i < s.length; i++){
        reverseStack.push(s[s.length - 1 - i])
    }
    for(let i = 0; i < s.length; i++){
        if(stack.pop() !== reverseStack.pop()){
            return false
        }
        return true
    }
    
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*---------------------MATCH PARENS-----------------------*/