let count = 5;
let calls = ["increment","reset","decrement"] ;
function Counter(count){
    let init = count
    let decrement = ()=>{
        return --init;
    }

    let reset = ()=>{
        let count = init
        return count;
    }
    
    let increment = ()=>{
        return ++count;
    }
    return{
        increment,
        reset,
        decrement,
    }
}

function executeCounter(count,calls){
    let counter = Counter(count)
    let results = [];
    calls.forEach(call => {
        if(typeof counter[call] === 'function'){
            results.push(counter[call]());
        }
    });
    return results;
}

let output = executeCounter(count, calls);
console.log(output); // [6, 5, 4]