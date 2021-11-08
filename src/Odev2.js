/*
2- Parametre olarak girilen iki sayının arkadaş 
sayılar olup olmadığını bulan programı yazınız.
number1
number2
return => number1 ve number2 arkadaş sayı ise true 
degilse false doner
*/
function friendlyNum(number1, number2) {
    if (number1 === sumOfDiv(number2) & 
        number2 === sumOfDiv(number1)) {
            
        //console.log(number1+" ve "+number2+" sayıları arkadaş sayılardır")    
        return true;
    }
    //console.log(number1+" ve "+number2+" sayıları arkadaş sayılar değildir") 
    return false;
}
function sumOfDiv(number) {
    let sum=0;
    for (let i = 1; i < number; i++) {
        if (number%i == 0) {
            sum+=i;
        }
    }
    return sum;
}
//console.log(sumOfDiv(284));
console.log(friendlyNum(220,284)) // true 
console.log(friendlyNum(5,4)) // false