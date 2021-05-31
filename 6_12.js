// function lar bilan ishlash
/* function myself(firstName, lastName) {

    console.log('Assalomu alaykum ' + firstName + " " + lastName)

}
myself('Abdurashid', 'Gaybullayev');
myself('Abror', 'Esirgapov '); // demak biz function bilan ishlaganimizda biz doim parametrlarga etibor berishimiz kerak
 ikkita parametr bolsayuu biz 1 ta parametrga qiymat berib qoysak undefined qiymat qaytaradi*/



// Arifmetik ammalar bilan ishlash
/* let a=3;
let b=4;
console.log("a="+a);  // a ning qiymatini chiqaradi
console.log("b=" + b); // b ning qiymatini chiqaradi
console.log("a+b="+(a+b));  // a va b ning yigindisini ciqaradi
console.log("a-b="+(a-b)); // a dan b ni ayirganimizni chiqaradi
console.log("a*b="+a*b); // a va b ni kopaytmasini topadi
console.log("a/b="+a/b); // a ni b ga boladi;
console.log("a^b="+a**b); // a ning b inchi darajasini hisoblaydi
console.log("a+1="+(++a)); // a ni qiymatini 1 oshirib keyin consolga chiqaradi
console.log("a="+a+" "+a++); // a ning qiymatini conslogga chiqarib keyin esa a ning qiymatini 1 ga oshiradi
console.log(a+" ni "+b+" ga bo'lgandagi qoldiq: "+(a%b)); // qoldiq */



//Solishtiruv va tenglik elementlari
// Bizda bu darsda kerak boladigan elementlar > = == ===  va ! elementlari
// katta kichik yoki == ga tekwirish kerka boladi bunda. ikki xil == va === lar bor bizda bunda bizda ulani 
// ajratishimiz un quyidagilarni amalga oshiramiz
/* console.log('1'===1);  // bunda termin bizda '' ga etibor qaratadi bu string bogani un tenglamayadi
console.log('1'==1);   // bunda ==  esa wunchaki tekwirib ketadi string yoki bowqasiga qaramaydi faqat ichini tekwirib ketaveradi */



//Misollar  
//misol 1
/* `let x=10;
y=5;
console.log(x>=y);
console.log(x>y);
console.log(x!==y);
console.log(x != y); */

//misol 2
/* let x=5;
// x!=='5' natija nima qaytaradi
console.log(x !== '5');  */// bu qiymat false qaytaraadi nimagaki bunda == tenglik bu sonlar teng ! bogani un false

//misol 3
/*  console.log("2"=="12") */

//Ternary operatori
/* let points=59;
let result = points > 60 ? 'imtixondan utdingiz':'imtixondan yiqildingiz';
console.log("Siz "+result); */

// misol ternary. ternary dan foydalanib dokonga azo bolgan inson 
/* let users='yes';
let check=users=='yes' ? 'Siz azolar safidasiz sizga 20% chegirma':'Siz azo emassiz siz uchun 5% chegirma ';
console.log(check) */


//Mantiqiy operatorlar &&(va)  ||(yoki)  !(emas)
/* let date=new Date();
let hour=date.getHours();
let minute=date.getMinutes();
console.log("Hour: "+hour+"  "+"Minute: "+minute);
let ifOfficeOpen=(hour>=9 && minute>0);
console.log(ifOfficeOpen) */

// Amaliyot
// vazifa wundan iborat hoz 2 ta ozgaruvchini  joyini almawtirib qoyiwimiz kerak;
/* let color1='qora';
let color2='oq';
let a=color1;
color1=color2;
color2=a;
console.log(color1);
console.log(color2); */ vazifa bajarildi 



