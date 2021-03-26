// ------------------------------------Intro------------------------------------------------------
// Arrays are one of the most common things you will use as a programer.
// This lab is going to cover some popular methods that can be preformed on arrays that can make
// your life SO much easier. 


// ------------------------------------Class Resources--------------------------------------------
// This lab will use both dot notation and square brackets [] learned during this weeks class
// session to both create & access arrays.

// Learn More About Objects (dot notation included) - https://bootcamp.burlingtoncodeacademy.com/lessons/javascript/objects#content

// Learn More About Arrays - https://bootcamp.burlingtoncodeacademy.com/lessons/javascript/arrays#content


// ------------------------------------Setup-------------------------------------------------------
// Open up the terminal and navigate to your desired lab directory.
// While still in the terminal make a new directory (mkdir file-name). 
// CD into this new directory (cd file-name)
// Open VS Code from inside this directory (code .)
// Create a new .js file.


// ------------------------------------Lab Start---------------------------------------------------
// 1.) To get started, we'll create an array of items that we can use to demonstrate these different
// array methods. Inside of this array we will have each item be its own object, with both a 
// name (string) and a price (number). It will looks something like this..


const items = [{
        name: 'PlayStation',
        price: 350
    },
    {
        name: 'Keyboard',
        price: 25
    },
    {
        name: 'Computer',
        price: 1000
    },
    {
        name: 'Notebook',
        price: 5
    },
    {
        name: 'Album',
        price: 10
    },
    {
        name: 'Book',
        price: 15
    },
    {
        name: 'TV',
        price: 200
    },
]

// ------------------------------------Filter------------------------------------------------------

// 2.) Now that we've created an array, the first method we can preform on this array is Filter.
// The filter() method creates a new array with all elements that pass the test specified by the 
// provided function.

// Create a filter() function that will look over our array and return items that are less than
// or equal to $100. 

// Example Solution:

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log('An array of items that cost less than $100 ', filteredItems);


// ------------------------------------Map---------------------------------------------------------

// 3.) The next array method we are going to cover is Map. The map() method creates a new array 
// populated with the results of calling a provided function on every element in the calling array.

// Create a map() function that will return all of the items names in our items array.

// Example Solution

const itemNames = items.map((item) => {
    return item.name
})

console.log('An array or item names', itemNames)


// ------------------------------------Find--------------------------------------------------------

// 4.) Another useful method on arrays is Find. The find() method returns the value of the first
// element in an array that satisfies the provided testing function. If no values satisfy 
// the testing function, undefined is returned.

// Create a find() function that will return a specific items name (ex. 'Computer')

// Example Solution

const foundItem = items.find((item) => {
    if (item.name === 'Computer') {
        return item
    }
})

console.log('Found the ' + foundItem.name + '!')


// ------------------------------------For Each-----------------------------------------------------

// 5.) The next array method you will see frequently is For Each. The forEach() method executes 
// a provided function once for each array element. Unlike the other methods so far, forEach does not
// actually return anything so you will not need the return statement for this method.

//  Create a forEach() function that will grab each items name and console.log it.

// Example Solution

items.forEach((item) => {
    console.log(item.name)
})


// ------------------------------------Some--------------------------------------------------------

// 6.) Some is another array method that has a slightly different implementation. Instead of returning
// an array, some() returns a boolean (either true or false). It returns true if, in the array, it 
// finds an element for which the provided function returns true. Otherwise, it returns false. 
// It doesn't modify the array however.

// Create a some() function that will tell us if our items array has any items that cost less than $100.

// Example Solution

const hasCheapItems = items.some((item) => {
    return item.price <= 100
})

console.log('Any items under $100?', hasCheapItems)


// ------------------------------------Every--------------------------------------------------------

// 7.) Similar to some, Every will also return a boolean (true or false) if every item in the array
// matches the provided function, not just some items.

// Create an every() function similar to the previous some() function. Except instead of seeing if
// some of the items cost less then $100, lets see if ALL of the items are less than $100.

// Example Solution

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

console.log('All items under $100?', hasInexpensiveItems)


// ------------------------------------Reduce-------------------------------------------------------

// 8.) The next array method we are going to cover is Reduce. The reduce() method executes a 
// reducer function (that you provide) on each element of the array, resulting in single output 
// value. The syntax for reduce() is a bit different, in this example reduce() will take an item and
// a property for what we want to reduce everything into. reduce() also takes a starting accumulator, 
// your reducer function's returned value is assigned to the accumulator, whose value is remembered 
// across each iteration throughout the array, and ultimately becomes the final, single resulting value.

// Create a reduce() function that give us the total of all our item prices.

// Example Solution

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log('Total Price: ', total)


// ------------------------------------Includes-----------------------------------------------------

// 9.) The last method we will cover in this lab is Includes. This one is a bit different because it does
// not actually take a function, it just takes a single argument. For this example, lets create a more 
// basic array of numbers that will look similar to this..

const numberArray = [1, 2, 3, 4, 5];

// The includes() method determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.

// Use includes() to determine if this numberArray includes specific numbers. (ex: 2 or 10)

// Example Solution

const includesTwo = numberArray.includes(2);
const includesTen = numberArray.includes(10);

console.log('numberArray includes #2? ', includesTwo);
console.log('numberArray includes #10? ', includesTen);


// ------------------------------------Outro--------------------------------------------------------

// That concludes this practice lab on Array Methods. For follow up on this project, feel free to try
// out some of the other methods we did not cover here / Or some of the ones that were already covered
// by Bob in class! (example: length, push, pop, slice, join . .)

// You can find great documentation of all the Available array methods here -
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array