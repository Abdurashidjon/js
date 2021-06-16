//37-dars every,some,filter

/* let numbers=[1,-5,3,8,56,-6];
let a=numbers.every(number=>numbers>0);
console.log(a); */ //ever ichida musbat son bor yoqligiga tekwiradi

/* let numbers = [2, -6, -2,3, -1];
let atLeastNumber = numbers.some(num=> num>=0);
console.log(atLeastNumber); */ //bu esa sonlarni 1 ta bolsa xam musbatga tekwiradi

/* let numbers=[-4,2,-5,9,12];
let musbat=numbers.filter(num=>num>=0);
console.log(musbat); */ // bu esa obwiy musbatga tekwiradi

// 38-dars map 
/* let numbers = [3, 7, 1, -6, 2, -54];
let filtered = numbers.filter(number => number >= 0);
/* let items=filtered.map(number=> '<li>'+number+'</li>');
let html=items.join(''); */
/* let items=filtered.map(number=> {
    return {value:number}
});
console.log(items); */ 

// 39-dars reduce() operatori
/* let toplam=[6,2,9,1];
let sum=0;
for(kalit of toplam){
    sum+=kalit;
}
console.log(sum); */  // sum ornida reduce metodini xam iwlatsak boladi

//reduce
/* let numbers=[4,1,8,2];
let sum=numbers.reduce((boshlangichQiymat,toplamKaliti)=> boshlangichQiymat+toplamKaliti,0);
console.log(sum); */

// 40-dars toplamlar ustida amaliy misollar
// 1-amaliy
/* let numbers=arrayFromRange(3,9);
console.log(numbers);
function arrayFromRange(min,max) {
    let boshToplam=[];
    for(let i=min; i<=max; i++){
      boshToplam.push(i);
    }
    return boshToplam; 
} */

// 2-amaliy
/* const numbers=[1,2,4,5,6,7,8];
let a=includes(numbers,4);
console.log(a);
function includes(array,elementToFind) {
    for(let key of array)
        if (key===elementToFind) 
            return true;
            return false;
    
} */

// 41-dars 3-amaliy
/* let numbers=[1,2,3,4];
let a=move(numbers,0,1);
console.log(a);
function move(array,index,offset) {
    
} */


/* 
var name=document.getElementById('input1');
var surName=document.getElementById('input2');
var age=document.getElementById('input3');

function myF() {
    var obj={
        userName: name.value,
        userSurname: surName.value,
        userAge: age.value
    }
    console.log(obj);
} */

// 41 -amaliy
/* let numbers=[1,2,3,4]
let output=move(numbers,0,10);
console.log(output);
function move(array,index,offset) {
    let position=index+offset;
    if(position>=array.length){
        console.error('Invalid offset');
    }
   
        let newArray = [...array];
        let element = newArray.splice(index, 1)[0];
        newArray.splice(position, 0, element);
        return newArray;
   
} */

//42-amaliy toplamdan max ni topamiz
/*  let numbers=[1,2,20,4,5];
let maxNumber=getMaxNumber(numbers);
console.log(maxNumber);
function getMaxNumber(array){
let  a=Math.max.apply(Math,array);
return a;
}  */ // bu birinchi usul

/* let numbers=[100,12,20,9];
let ekran=getMaxNumber(numbers);
console.log(ekran);
function getMaxNumber(array) {
    let a=array[0];
    for(let key of array)
    if(a<=key) a=key;
    return a;
} */  // for loop orqali 
let numbers=[3,5,2,8,50];

let maxNumber=numbers.reduce((a,b)=>(a>b) ? a:b);
console.log(maxNumber);  //reduce orqali


