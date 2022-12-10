# Third written HM for Unit 3

### 1. What are all the JavaScript Data Types?
- Strings, numbers, booleans, undefined, null 

### 2. What is the Difference Between Const Let and Var? Consider Scope ... Give an example
- var = variables that can be updated or re-declared 
```JavaScript
var color = 'red'
```
- let = variables that can be updated but not re-declared 
```JavaScript
let counter = 0
```
- const = variables that can be neither updated nor re-declared 
```JavaScript
const array = [1,2,3,4,5]
```

### 3. Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?
- Pass by value: sends a copy of the data stored in the variables you specify
- Pass by reference: sends a direct link to the variable itself 
- Classes and strings are always reference-types. Enum is a value type 

### 4. What do Map , Filter and Reduce do? Do they mutate the array you call them on?
- Map method creates a new array with results of calling a provided function on every element 
```JavaScript
const nums = [1,2,3,4]
const powedNums = nums.map(i => i ** 2)
```
- Filter method creates a new array with passed items that is the same size or smaller than the original array 
```JavaScript
const nums = [1,2,3,4]
const evenNums = nums.filter(i => i%2 === 0)
```
- Reduce method applies a function against an accumulator and each element in the array to reduce to a single value 
```JavaScript
const nums = [1,2,3,4]
const sumNums = nums.reduce((acc, cur) => acc+cur) //returns 10 as the sum of items in array 
```

### 5. What are all the Falsey Values in JavaScript? Why do you think this is important to know?
- A falsey value in JS is a value when considered false in a boolean content 

### 6. What are Async and Await?
- async and await enable asynchronous, promise-based behavior to be written in a cleaner style, and can also be defined as expressions 

### 7. What is an async function?
- async functions can be written as promises based on code that was synchronous and it checks that we are not breaking the code 

### 8. What are try and catch?
- try and catch statements specify handlers for different exceptions like catching errors if something did not happen like displaying an error message if a button did not execute a function ("no function to display)