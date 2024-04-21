let queue = []
let currentSize = queue.length;

function enqueue(value) {
    queue.push(value);
    currentSize++;
}

function display() {
    console.log(queue);
}

function dequeue() {
    for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
}
enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
dequeue()
display()