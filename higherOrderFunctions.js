var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]
// For Loop
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
        dogs.push(animals[i])
} 

// Filter
var dogs = animals.filter(function(animal) {
    return animal.species === 'dog'
})
// 
var isDog = function(animal) {
    return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)

// Map
var names = animals.map(funtion(animal) {
    return animal.name 
})
// Arrow Function
var names = animals.map((animal) => animal.name);

// 
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]
// For Loop
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
// Reduce
var totalAmount = orders.reduce(funtion(sum, order) {
    return sum + order.amount
}, 0);
// Arrow Function
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// Reduce Advanced
import fs from 'fs';

// data.txt
/*  
    mark johansson  waffle iron 80  2
    mark johansson  blender 200  1
    mark johansson  knife 10  4
    Nikita Smith    waffle iron 80  1
    Nikita Smith    knife 10  2
    Nikita Smith    pot 20  3
*/

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

console.log('output', JSON.stringify(output, null, 2))