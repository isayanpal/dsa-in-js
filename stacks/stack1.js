import Stack from "./index.js";

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.getSize()); // 2
console.log(stack.isEmpty()); // false
