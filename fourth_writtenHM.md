# Fourth written HM for Unit 3

## Solution: 
```JavaScript
function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0
    let posCorr, negCorr, zeroCorr;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pos++
        } else if(arr[i] < 0){
            neg++
        } else{
            zero++
        }
    }
    posCorr = (pos/arr.length).toFixed(6)
    negCorr = (neg/arr.length).toFixed(6)
    zeroCorr = (zero/arr.length).toFixed(6)
    console.log(posCorr + "\n" + negCorr + "\n" + zeroCorr)
}
plusMinus([-4, 3, -9, 0, 4, 1])

/* returns:
0.500000
0.333333
0.166667
*/
```

### Runtime: 
![](/public/plusMinusSuccess.png)

## Code explanation: 
* ### The problem states: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

* ### First I set the variables, positive, negative & zero all equal to 0. Since the question is asking me to print the decimal value of each fraction within the first 6 places, I must assume that the length of the array must be 6. 

* ### I then declared the correlation values I set as posCor, negCor & zeroCor in order to get fractional values so they each add up to 100%. 

* ### Inside of my for loop I declared that each positive item in the array must be greater than 0, less than 0 for negative, and equal to 0 if it's 0. 

* ### I then set the values of the correlated numbers (ratios) to be divided by the length of the array in order to get the fractional value, and I used the .toFixed() method to round the fraction to a specified number of decimals, which would be 6 in this case, so each of the three fractions equals to 6/6. 