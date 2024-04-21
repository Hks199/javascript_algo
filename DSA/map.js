
let data = new Map([
    ['name', 'Harish'],
    ['true', 'boolean'],
    ['25', 'number']
])

data.set('color', 'green');

console.log(data.size);

console.log(data.has('name'));

console.log(data.get('25'));

data.forEach((x, y) => {
    console.log(`${x} ${y}`);
})
data.delete('true')

console.log(data);

data.clear();

