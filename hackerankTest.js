function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0
    let posCorr, negCorr, zeroCorr;
    for(i in arr){
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

