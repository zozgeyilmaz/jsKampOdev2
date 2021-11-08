/*
3- 1000'e kadarki tüm mükemmel sayıları 
listeleyen programı yazınız.

*/

function findPerfectfNum1To1000() {
    let perfectNumArr = []
    for (let i = 1; i < 1000; i++) {
        
        if (i === sumOfDiv(i)) {
            perfectNumArr.push(i)
        }
        
    }
    return perfectNumArr;    
}
//bir sayinin bolenleri toplami
function sumOfDiv(number) {
    let sum=0;
    for (let i = 1; i < number; i++) {
        if (number%i == 0) {
            sum+=i;
        }
    }
    return sum;
}
/*
(3) [6, 28, 496]
0: 6
1: 28
2: 496
length: 3
*/
console.log(findPerfectfNum1To1000())
