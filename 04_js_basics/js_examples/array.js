
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

let fruit = fruits[1]; // Accesses 'Banana'

fruits.push('Grapes'); // Adds 'Grapes'
fruits.pop(); // Removes 'Grapes'

fruits.shift(); // Removes 'Apple'
fruits.unshift('Pineapple'); // Adds 'Pineapple'

let selectedFruits = fruits.slice(1, 3); // Returns ['Banana', 'Orange']
fruits.splice(2, 0, 'Kiwi'); // Inserts 'Kiwi' at index 2

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
    console.log(fruit);
});
