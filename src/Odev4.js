/*
4- 1000'e kadarki tüm asal sayıları 
listeleyen programı yazınız.
*/
function findPrimNum1To1000() {
    let primeNumArr = []
    for (let i = 2; i <= 1000; i++) {
        if(isPrime(i)){
            primeNumArr.push(i)
        }
    }
    return primeNumArr
}

function isPrime(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if(number%i == 0)
            count++
    }
    if (count > 2) {
        return false;
    }
    return true;
}
// 168 asal sayi gosterir
console.log(findPrimNum1To1000())

