# timeConversion hackerank challenge 

## Solution: 
```JavaScript
function timeConversion(s){
    const isPM = s.indexOf('PM') !== -1
    let [hours, minutes, seconds] = s.replace(isPM ? 'PM':'AM', '').split(':')
    if (isPM) {
        hours = parseInt(hours, 10) + 12
        hours = hours === 24 ? 12 : hours
    } else {
        hours = parseInt(hours, 10)
        hours = hours === 12 ? 0 : hours
        if (String(hours).length === 1) hours = '0' + hours
    }
    const time = [hours, minutes, seconds].join(':')
    return time
}
```

![](/public/timeConvert.png)

---

## Logic: 
* ### First we have to convert the 12 hour to 24 hours format, so we use the split method to divide the 12 hour pattern and divide the string into an ordered list of substrings 
* ### If the hour is PM we return it as an integer using the parseInt method and set 12 to be 24 and return it as a string. If the hour is 10, we set it to be 0 + hours 