let data = [];
let currentSize = data.length;
let max = 5;
function push(element) {
    if (currentSize >= max) {
        console.log("No empty space remains for " + element);
    } else {
        data[currentSize] = element;
        currentSize++;
    }

}

function pop() {
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        console.log("stack is empty");
    }
}

push(25);
push(26);
push(27);
push(28);
push(29);
push(30);
pop()
pop()
pop()
pop()
pop()
pop()


console.log(data);