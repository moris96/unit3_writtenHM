# First Written HM for Unit 3

## Counter Example Explanation: 

--- 
## Files: 
* ### Index.html: 
    * Main HTML document for the project. The div inside the body is given an ID of "root", making it the main element where all the React stuff will go inside the body of the DOM. 
    ```HTML
    <body>
    <div id="root"></div>
  </body>
    ```
    ---
* ### Index.js:
    * Creating a variable called "root" which calls the element by ID "root" from the div in the HTML file to specify what the body will be when using React components. 
    ```JavaScript
    const root = createRoot(document.getElementById("root"));
    ```
    * Importing the CSS stylesheet using 
    ```JavaScript
    import "./styles.css";
    ```
    * Importing the App.js (where the bulk of the fullstack React capabilities is being used)
    ```JavaScript
    import App from "./App";
    ```
    ---
* ### App.js:
    * Importing useState from the React module 
    ```JavaScript
    import { useState } from 'react';
    ```
    * Creating a counter app that updates seperately. First a function called MyButton is created which sets counter variables and conditions to count that starts at 0 
    ```JavaScript
    function MyButton() {
        const [count, setCount] = useState(0);
    ```
    * Setting conditions for counter that every time you click, it increases by 1 
    ```JavaScript
    function handleClick() {
        setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
    ```
    * Also in React you can set HTML elements inside the JS file and export the app 
```JavaScript
    export default function MyApp() {
    return (
        <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
        </div>
    );
    }
```
---

## Basically this app is creating a simple counter app using React, which makes it easier to use front-end stuff inside of JS files. 