// Classic For loops

// 1. Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
for (let i = 0; i <= 1000; i++) {
console.log(`Your on number ${i}`);
}

// 2.Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
for (let i = 100; i >= 0; i--) {
console.log(`Your on number ${i}`);
}

// 3. Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 4. Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} ${fruits[i]}`);
}


// For of loops

// 6. Loopa ut ovanstående array och console.log() varje pryl.
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
for (let i of things) {
    console.log(i);
}


// For Each loops

// 7. Loopa ut ovanstående array och console.log() varje pryl.
things.forEach(item  => {
    console.log(item);
});
// 8. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
things.forEach((item, index) => {
    console.log(index, item);
});


// While loops

// 9. Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
let i = 0;
while (i <= 1000) {
    console.log(i);
    i++;
}


// Loop da loops

// 11. Loopa ut samtliga vänners favoritfrukter med en console.log().
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i].likes.toString());
    console.log(`${friends[i].name} likes: ${friends[i].likes.toString()}`);
}