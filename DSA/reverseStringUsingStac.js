let stack = [];
let current_length = stack.length;

function push(val) {
    stack[current_length] = val;
    current_length++;
}

function pop() {
    let poped_ele = stack[current_length - 1]
    current_length--;
    stack.length = current_length;
    return poped_ele;
}

function reverseString(str) {
    let reverse_str = ''
    for (let i = 0; i < str.length; i++) {
        push(str[i]);
    }

    for (let j = 0; j < str.length; j++) {
        reverse_str = reverse_str + pop();
    }
    return reverse_str;
}

console.log(reverseString("harish kumar sahu"));