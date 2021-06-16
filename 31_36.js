// null bilan amalga oshiriladi
// 32 math va string bn iwlaw
/* let a;
a=Math.round(4.8); // butunga otkazadi yaxlitlaydi 4.8=5
console.log("Taqribiy "+4.8+"="+a);
let b=3;
b=Math.pow(3,2);
console.log("Daraja  "+3+"^"+2+"="+b);
console.log("pi ozgarmasi="+Math.PI);
console.log(Math.E);
console.log("Butun qismini olish 4.8  "+Math.floor(4.8));
console.log("Moduli |-90|="+Math.abs(-90));
console.log("Bir nechta sonlar ichida max ni topish 10 20 60 15 24 MAX.number="+Math.max(10,20,60,15,24)); 
console.log("Logarifmni topish: log2(8)="+Math.log2(8)); */

//Practics
/* let lapTop = {
    color: 'black',
    ssd: 300,
    features: {
        cpu: 'i9',
        ram: 32
    },
    screenSize: 17,
    company: 'Lenovo',
    powerOn: function () {
        console.log('on');
    }
}
console.log(lapTop); */

/* function createLaptop(cpu,ram, storage,screenSize,brand) {
    return{
        cpu,
        ram,
        storage,
        screenSize,
        brand,
        powerOn(){
            console.log('on');
        }
    }
}

let laptop=createLaptop('i5','16GB',{type:'ssd', capacity:'512GB'}, 17, 'Hp')
console.log(laptop); */

//34 toplamlar
/* let numbers=[3,4];
numbers.push(5,6);// toplamni ohiirga qowib qoyadi
console.log(numbers);
numbers.unshift(8,7);// bu toplamni bowiga qowadi
console.log(numbers);
numbers.splice(3,0,34);// bunda esa xoxlagan joyimizdan element qowadi
console.log(numbers); */

/* const laptops = [
    { id: 1, cpu: 'i5', ram:'8gb',hdd:'500gb'},
    { id: 1, cpu: 'i7', ram:'16gb',hdd:'1tb'},
    { id: 1, cpu: 'i9', ram:'32gb',hdd:'2tb'},
];
let laptopIndex=laptops.findIndex(function (laptop) {
    return laptop.cpu==='i9';
});
console.log(laptopIndex); */
//34 toplamga element qowiw ochirish
/* let numbers=[3,4,5,6,7];
let num=numbers.pop();
console.log(numbers); */

/* let numbers=[5,7,9,3,2];
let num=numbers.shift(); toplam boshidan boshlab element ochiradi
console.log(numbers);
console.log(num); */

/* let numbers=[5,2,4,8,9];
let num=numbers.splice(2,4); // ikkinchisidan boshlab 4 ta element ochiradi
console.log(numbers);
console.log(num); */

/* let numbers = [6, 5, 4, 3, 2, 1, 9];
numbers=[]; // Toplamda hamma elementlarni bowatadi
console.log(numbers); */

/* let numbers=[1,2];
numbers.length=0; // bu xam boshatadi toplamni
console.log(numbers); */


//35 2 ta toplamni birlashtirrish
/* let set1=[1,2,3];
let set2=[4,5,6];
let set=set1.concat(set2); // concat bu toplamlarni birlashtirib beradi
console.log(set);
let separate=set.slice(2,4); // slice bu toplamda hoxlagan elementdan bowlab ajtatib beradi
console.log(separate); */
/* let first=[3,4,5];
let second=[7,8,9];
let set=[...first, ...second];
console.log(set); */

/* let first=[1,2,4];
let second=[5,6,7];
let set=(first.concat(second)).join(''); // bu toplamni string koriniwda birlawtiradi 124567
console.log(set); */

//36 toplamlarni tartiblash
/* let a = [
    { id: 2, name: 'Botir' },
    { id: 1, name: 'Abdurashid'},
    { id: 3, name: 'Rasul' },
];

a.sort(
    function(first,second) {
        if(first.name<second.name) return -1;
        if(first.name>second.name) return 1;
        return 0;
    }
);
console.log(a); */ //bu xolat faqat assemler holat un agar biror for exmaple Abdurashidni abdurashidan boshlasak a ohirigaotib qoladi.

/*  let a=[
     {id:2,name:'Botir'},
     {id:3,name:'abdurashid'},
     {id:1,name:'behzod'}
 ];
 a.sort(
     function(first,second) {
         let namefirst=first.name.toLowerCase();
         let namesecond=second.name.toLowerCase();
     if(namefirst<namesecond) return -1;
     if(namefirst>namesecond) return 1;
     return 0;         
     }
 );
  console.log(a); */ // demak bu barchasi un iwledi avval ular harflarni kichik ka otkazib olib keyin esa iwlaydi eunda muammo bomedi umuman


