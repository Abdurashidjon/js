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


// 22(1-topwiriq) sum. Biror son kiritiganimizda 3 va 5 ga bo'linadiganlarini yigindisini topiw. For example 10 bosa 3 6 9 va 5 10 ni yigindisi
/* let a = +prompt('Biror son kiriting');
let sum=0;
let sum2=0;
function sumNumber(a) {
    for (let i = 0; i <= a; i++) {
        if (i % 3 == 0) {
        sum=sum+i;
        }
    }
    for (let j = 0; j <= a; j++) {
        if (j%5==0) {
            sum2=sum2+j;
        }
    }
    return (sum+sum2);
}
console.log(sumNumber(a)); */


// 22(2-topwiriq) Biror obekt elon qilamiz ichiga 2 ta number va 2 ta string elon qilamiz function bizga faqat string qiymatlarni qaytarib berishi kerak
/* let car = {
    model: 'Chevrolet',
    name: 'Nexia3',
    year: 2020,
    money: 80000000
}
function showProperties(obj) {
    for (let key in obj) {
       if (typeof obj[key] === 'string') {
           console.log(key,obj[key]);
       }
    }
}
showProperties(car); */


// 23 talabani baholarirni ortachasini chiqarish
/* const marks = [81, 74, 86, 59, 77];
console.log(calculateGrade(marks));
function calculateGrade(marks) {
    let a = calculateA(marks);
    if (a < 50) return 'F';
    if (a < 60) return 'D';
    if (a < 70) return 'C';
    if (a < 80) return 'B';
    return 'A';
}
function calculateA(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    let a = sum / array.length;
    return a;
} */




//24 biror son kiritib ozigacha bo'lgan tub sonlarni topish 
let a = +prompt("Biror son kiriting:");
showPrimeNumbers(a);

function showPrimeNumbers(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
       if(isPrime) console.log(i);
    }
}
