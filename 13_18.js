// Demak bugungi darsdan boshlab if va else ni bowlaymiz
/* if (shart) {
    statement1;
    statement2;
}else if (bowqaShart) {
    statement3;
}else{
    statement4;
} */
//13
/* let hour=+prompt('Soatni kiriting:');

if (hour>=6 && hour<12) {
    console.log("Xayrli tong");
}else if (hour>=12 && hour<18) {
    console.log("Xayrli kun");
} else if (hour>=18 && hour<22) {
    console.log("Xayrli kech");
} else{
console.log("Xayrli tun");
} */

//14 switch case
/* let word=prompt('Biror suz kiriting tarjima qiberamiz');
    switch (word) {
        case 'car':
            console.log("Avtomashina");
            break;

        case 'book':
            console.log("Kitob");
            break;

            case 'bcycle':
                console.log("Velosiped");
                break;

        default:
            console.log("Bizning lugatda bunaqa so'z yo'q: ")
    } */ // biz buni if elseda qilsak ham boladi dasturchi oziga qulay tomonini qilsa bolaveradi



//15 loop lar haqida taniwamiz. for loop ni koramiz
/*    for (let i = 1; i <=5; i++){
       if (i%2==1) {
           console.log('salom '+i)
       }  */
// bunda wart bajarilib keyin kod yoziladi 
/* let i=0;
while (i<=10) {
    if (i%2 !==0) {
        console.log(i); 
    } i++;
}// Bunda birinci dastur iwlab keyin kod yoziladi */

/* let i=21;
do {
    if (i%2==1) {
        console.log(i);
    }
     i++;
} while (i<=10); */ // bunda avval kod yozilib keyin wart iwlaydi


/* let i=1;
while (i<=10) {
    if (i==7) {
        break;
    }
    console.log(i)
    i++;
} */ // Bu yerda esa break bizda nechiga teng bolsa owanda wart iwlamay chiqib ketadi 

let i=0;
while (i<=10) {
    if (i%2==1) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
 