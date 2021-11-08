/*
1- JavaScript ile istediğiniz kadar sayı parametre 
gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona
gönderdiğiniz her sayı için çıktı olarak asal olup 
olmadığını yazınız.
    findPrime(2,5,8,21, 13) 
    findPrime(3,5)
*/
let numbersArr = [10, 2, 3, 13, 100, 19]
function findPrime(...numbers) {

    numbers.forEach(i => {   
        if (isPrime(i)) {
            console.log(i+" asal sayıdır.")
        }
        else{
            console.log(i+" asal sayı değildir.")
        }
    });
    
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

findPrime(3,10,19,5,100,2)
findPrime(...numbersArr)
