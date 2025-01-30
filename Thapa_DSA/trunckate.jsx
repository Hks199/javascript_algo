let str = "harish kumar sahu ji Nagpur wale"
let count = 20;
function trunckate(str, count) {
    if (str.length > count) {
        return str.slice(str, count).concat("...");
    }
}

console.log(trunckate(str, count))