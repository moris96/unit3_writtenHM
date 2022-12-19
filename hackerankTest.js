//plus minus challenge
// function plusMinus(arr) {
//     let pos = 0, neg = 0, zero = 0
//     let posCorr, negCorr, zeroCorr;
//     for(let i in arr){
//         if(arr[i] > 0){
//             pos++
//         } else if(arr[i] < 0){
//             neg++
//         } else{
//             zero++
//         }
//     }
//     posCorr = (pos/arr.length).toFixed(6)
//     negCorr = (neg/arr.length).toFixed(6)
//     zeroCorr = (zero/arr.length).toFixed(6)
//     console.log(posCorr + "\n" + negCorr + "\n" + zeroCorr)
// }
// plusMinus([-4, 3, -9, 0, 4, 1])


// mini-max sum challenge
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
miniMaxSum([7,69,2,221,8974]) //should be 299, 9271
miniMaxSum([1,2,3,4,5])
