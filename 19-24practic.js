/* // if
let a=+prompt('A sonni kiriting');
console.log("a="+a);
let b=+prompt('B sonni kiriting');
console.log("b="+b)

if (a>b) {
    console.log(a+" soni "+b+" sonidan katta a>b");
}
else{
    console.log(b + " soni " + a + " sonidan katta b>a")
} */

//function yordamida ikkita sonni taqoslash
/* let a=+prompt('a sonni kiriting son');
let b=+prompt('b sonini kiriting');
let number=compare(a,b);
console.log(number)
function compare(a,b) {


    if (a>b) {
        return a;
    }
    else if(b>a){
        return b;
    }
    else{
        return 'Bu sonlar teng';
    }
} */

/* let a=+prompt();
let b=+prompt();
console.log(getMax(a,b));
function getMax(a,b) {
    return (a>b) ? a:b;
} */


// misol boolean qaytarishi kerak
/* let width=+prompt('Eni');
let height=+prompt('Buyi');
console.log(picture(width,height));
function picture(width,height) {
    return (width>height);  
} */



// 20 Function fizzBuzz
/* let input=+prompt('Biror nima kiriting: ')
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'Son emas';
    } 
    if (input%3==0 ) {
        if (input % 5 == 0) {
            return 'fizzBuzz';
        }else{
            return 'fizz';
        }
    }
    if (input%5==0) {
        return 'Buzz';
    }
 
    else  {
        return input;
    }
    
}
console.log(fizzBuzz(input)) */


// 21 Speed point. Agar 70 dan oshsa har 5 ga 1 point. 12 ta point bu guvohnoma reshat
/* let a = +prompt("tezlikni kiriting:");
let x;
function speedPoint(a) {
    if (typeof a !== 'number') {
        return 'Bu tezlik emas';
    }
    if (a <= 70) {
        return 'Ok';
    }
    else {
        a = a - 70;
        x = Math.floor(a / 5);
        if (x <= 12) {
            return x + ' ta point';
        } else {
            return 'Guvohnoma olib qo\'yiladi';
        }
    }
}
console.log(speedPoint(a)); */


// 22 sum