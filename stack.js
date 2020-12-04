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
        if (this.top === null) return null
        const node = this.top;
        this.top = node.next;
        return node.data;
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

function matchBrackets(string){
    if(!string.length) return null;
  
    let stack = new Stack()
  
    for(let i = 0; i < string.length; i ++){
      if (string[i] === '(' || string[i] === '{' || string[i] === '['){
        stack.push('(')
      }
      if(string[i] === ')' || string[i] === '}' || string[i] === ']'){
        if(isEmpty(stack)){
          console.log('missing an opening bracket')
          return false
        }
        stack.pop()
      }
    }
    if(!isEmpty(stack)) {
      console.log('missing a closing bracket')
      return false
    }
    return true
  }
  console.log(matchBrackets('{()}[([()])]'))//true
  console.log(matchBrackets('{()[]'))// false 'missing a closing bracket'
  console.log(matchBrackets('{]}()'))// false 'missing an opening bracket'


/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*----------------------SORT STACK------------------------*/
  
function stackSort (stack) {
    if (stack.top === null || stack.top.next === null) return stack;
    //iterate through the given stack once and identify minValue and maxValue.
    //push maxValue to newStack.top
    //iterate through the given stack again to find the next largest number
    //that is less than newStack.top
    //once we've taken one pass through the given stack, we will push the current value
    //of largestValue to newStack
    //run this iteration until newStack.top === minValue  
    
    const newStack = new Stack();
    let minValue = stack.top.data;
    let maxValue = stack.top.data;
    let currNode = stack.top;
    while (currNode.next !== null) {
      if (currNode.data > maxValue) maxValue = currNode.data;
      if (currNode.data < minValue) minValue = currNode.data;
      currNode = currNode.next;
    }
    if (currNode.data > maxValue) maxValue = currNode.data;
    if (currNode.data < minValue) minValue = currNode.data;
  
    newStack.push(maxValue);
  
    while (newStack.top.data !== minValue) {
      let currNode = stack.top;
      let currMax = minValue;
      
      while (currNode.next !== null) {
        if (currNode.data > currMax && currNode.data < newStack.top.data) {
          currMax = currNode.data;
        }
        currNode = currNode.next;
      }
      if (currNode.data > currMax && currNode.data < newStack.top.data) {
        currMax = currNode.data;
      }
      newStack.push(currMax);
    }
  
    return newStack;
  }

//   function sortStack(stackA){
//     let stackB = new Stack()
//     while(!isEmpty(stackA)){
//       const temp = stackA.pop()
//       while(temp < peek(stackB)) {
//         stackA.push(stackB.pop())
//         console.log('STACK A', display(stackA))
//             }
//       stackB.push(temp)
//     }
//     return stackB
//   }
  
  const numbers = new Stack()
  numbers.push('10')
  numbers.push('3')
  numbers.push('4')
  numbers.push('7')
  numbers.push('8')
  
  display(numbers)
  
  display(stackSort(numbers))