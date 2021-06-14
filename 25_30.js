// Yangi obyektlar haqida
// const circle={
//     radius:1, 
//     location:{
//         x:1,
//         y:1
//     }
//     isVisible:true,
//     draw: function () {
//         console.log('doira');
//     }
// };

// circle.draw();
/* let user={
    name: 'Abdurashid',
    age: 22
}
let surname={};
for(let key in user){
    surname[key]=user[key];
}
surname.name='Abdulvoris';
console.log("Surname.name: ",surname.name);
console.log("User.name",user.name); */ // Bu biror obyektdan nusaxa olish. Uni qiymatini yangi berib eskisini ozgartirmaslik


// Obekt ichida funksiyani chaqirish
/* const circle = {
    radius: 1,
    location:{
    x:1,
    y:1
    },
    
    draw: function() {
        console.log("Chizmoq yoki durang");
    },
    move: function () {
        console.log("Bu bowqa funksiya");
    }
}

circle.draw();
circle.move(); */

// Factory
/* function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('doira')
        }
    };
}
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('doira');
    }
}

const circle1 = createCircle(1);
const circle2 = new Circle(2);
console.log(circle1.constructor);
console.log(circle2.constructor); */

/* function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('doira');
    }
}
//console.log(Circle.name, Circle.length, Circle.constructor);
const Circle2=new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log('doira');
    }`);
    const circle = new Circle2(3);
    console.log(circle); */

/*   const circle ={
      radius:1,
      draw(){
          console.log('doira');
      }
  };
  for(let key in circle)
  console.log(key,circle[key]); */

//30 clone olish 1-yol oson yoli for in bn
/* const circle = {
    radius: 1,
    draw() {
        console.log('doira');
    }
};
const clone = {};

for (let key in circle)
clone[key]=circle[key];
console.log(clone); */

//30 clone olish 2-yol object.assign bn oson yol
/* const circle={
    radius:2,
    draw(){
        console.log('Doira');
    }
};
 
const clone=Object.assign({},circle);
console.log(clone); */ // Bunda bow bolgan clone ichiga circle obekti qiymatlari joylawtiriladi
/* const circle = {
    radius: 12,
    draw() {
        console.log('Doira');
    }
};
//const clone=Object.assign({color: 'Green', radius: 100}, circle); //bu circleda borlarni clonega qowib qoyadi agar clone da ham circle kabi qiymat bolsa uni olmaydi circlenikini oladi
const clone={comment:'Bu clone ichidagi string',...circle};
console.log(clone); */
