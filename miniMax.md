# mini-max sum challenge

## Problems: 
### * my first submission was rejected because I might have misread the problem and thought it was asking for me to print out the sum of all numbers in an array lol. It's a correct solution if this was the problem lol
```JavaScript
function miniMaxSum(arr) {
    let sum = 0
    let min = arr[0]
    let max = arr[0]
    for(let i in arr){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
    }
    console.log(sum)
}
miniMaxSum([1,2,3,4,5]) //returns 15 
```

### * After carefully reading the problem again, it clearly states: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers, which clearly means I have to find the minimum and maximum sums 

### * working submission: 
```JavaScript
function miniMaxSum(arr) {
    let min = arr[0], max = arr[0], sum = 0
    arr.forEach(i => {
        if(i < min) min = i
        if(i > max) max = i
        sum += i
    })
    console.log(sum-max, sum-min)

    // for(let i in arr){
    //     if(i < arr.length - 1){
    //         min += arr[i]
    //     } if(i > 0){
    //         max += arr[i]
    //     }
    // }
    // console.log(min, max)
}
```
### * I used the forEach method to iterate over the array so that if each element is less than the minimum or greater than the maximum it would print the minimum and maximum sums 

![](/public/miniMaxSum.png)

---

## Note 1: I commented out the for loop I wrote because in the second test for [7,69,2,221,8974] it returned 9273 instead of 9271 for the max sum lol 

## Note 2: I prefer to do these math problems in Python because it's way easier to because of the syntax and more math methods like in numpy 
### * For this method I just sliced the min and max summed values of the array. Python is waaaay better for math lol (my opinion at least). It's literally the same as the JS solution but in 1 line 
```Python
def miniMaxSum(arr):
    return (sum(sorted(arr)[:-1]), sum(sorted(arr)[1:]))
```