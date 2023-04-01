    // alert("hello")
// console.log(10 + 10)
// var x = 1
// const y = 2
// console.log(x / y)
// var age = 12
// if (age > 18) {
//     console.log("chapahas")
// } else {
//     console.log("anchapahas")
// }
// age = 23
// if (age > 18) {
//     console.log("chapahas")
// } else {
//     console.log("anchapahas")
// }
// var age = 18
// if (age < 18) {
//     console.log("anchapahas")
// }
// else if (age >= 18 && age < 63) {
//     console.log("chotkiy")
// }
// else if (age >= 63) {
//     console.log("cer")
// } 
// let x = 6;
//     (x > 12) ? console.log("yes") : (x= 6) ? console.log("x = 6") : console.log("NO");
// let x = 50;  
// for(var i = 1; i < 10; i++){
//     if(i==5){
//         break;
//     }
//     let y = x+10
//     console.log(i);
//     console.log(y);
// }
// for(var i = 1; i < 10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }
// let sum = 0;
// for     (let i=1; i <= 100; i++ ) { 
//     sum=sum+i;
    
// }
// console.log(sum)                        

// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0) {
//         console.log(i);                             

//     }
// }        
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0) {
//         console.log(i);                             

//     }
// }        
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 1) {
//         console.log(i);                             

//     }
// }        
// let count=0;
// for (let i=17;i<1000;i+=17){
// count++;}
// console.log(count)



// function modul(num){
//     return (num < 0)? -num : num
// }
// function pow(a,b) {
//     let res = 1;
//     if(a == 0 && b == 0){
//         return "sahmanvac chi"
//     } else if (b <= -1){
//         for(let i = 1; i <= modul(b); i++){
//             res = res * a;
//         }
//         return 1/res;
//     } else{
//         for(let i = 1; i <=b;i++){
//             res = res * a
//         }
//     }
//     return res;
// }
// console.log(pow(5, -1) );



//  let a = 2 ;
// let b = 6 ;
// let d = a ;
//  a = b;
//  b = d;
//  console.log("a = ", a );
//  console.log("b = ", b );



/*var fib1 = 0;
var fib2 = 1;
var nextFib;for(let i = 0;i <= 10; i++) {
  console.log(fib1);
  nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
}  esi fibonacci arajin dzevna
   



esi erkrord
function fibonacci(n) {
  var fib1 = 0;
  var fib2 = 1;
  var nextFib;
  for(let i = 0;i <= n; i++) {
  console.log(fib1);
  nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
}
}
fibonacci(5) 
var fib1 = 0;
var fib2 = 1;
for(let i = 1;i <= 1000; i++) {
  console.log(fib1);
  i = fib1 + fib2;
  fib1 = fib2;
  fib2 = i;
} esi im sarqac chisht dzevna 

function fibonachi(n) {
  if(n == 0 || n == 1){
    return n
  } else {
    let fib1 = 0;
    let fib2 = 1;
    let nextFib;

    for(let i = 2;i < n; i++) {
      nextFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = nextFib;
    }
    return nextFib;
  }
}
console.log(fibonachi(4));  fibonachii inch vorerord tivy*/

// function say(x) {
//   console.log(`barev  ${x}`);
// }

// say("hayer")


// let say = (x)=>{
//   console.log(`barev  ${x}`);
// }

// say("hayer")


// Nayel ForEach,Map,every,some,includes,reduce;

// let arr1 = [1,3,5,7,9]
// let res = function(arr){
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// }
// ;console.log(res(arr1));

// let src = "sf rfs fr sf   rsfrsfs srr rsf"
// let count = 0;
//   for (let i = 0; i <= src.length; i++) {
//     if(src[i] === " "){
//       count++;
//     }
//   }

// console.log(count);

// let srf = "ejckdjnsc ykdjnewyywww eeer kjy"
// let count = 0;
// for(let i = 0;i <= srf.length;i++) {
//   if(srf[i] === "e" || srf[i] ===  "y"){
//     count++
//   }
// }
// console.log(count);
//  let string = "Armen Yeghiazaryan Gevorgi cnvac e 2009 tvin";
//  let arr1 = string.split("");
//  let arr2 = string.split(" ");
//  let countNumb = 0;
//  for(let i = 0;i < arr1.length;i++) {
//    if(!isNaN(+arr1[i])&&arr1[i]!==" ") {
//    countNumb++;
//    }
//  }
//  console.log(countNumb);

 // A- +A -NaN typeof NaN === "number"
 // " " +" "-> 0


//  function  getNumber(num) {
//    let str = num + "";
//    return str.split("").includes("3");
//  }

// let count = 0;
// for(let i = 0;i < 1000;i++) {
//   if(getNumber(i)) {
//     count++
//   }
// }
// console.log(count);

// let object =  {
//   Anun:"Armen",
//   Azganun:"Yeghiazaryan",
//   Hayranun:"Gevorgi",
//   Taretiv:"2009",
// }

// console.log(object);


// console.log(this);



// let book1 = {
//   title:"ansasan 1",
//   price:"2000$",
//   page_num:"233",
//   getinfo: info 
// }

// let book2 = {
//   title:"ansasan 2",
//   price:"1302$",
//   page_num:"183",
//   getinfo: info,
// }

// function info() {
//     return this.title + ", " + this.price + ", " + this.page_num
// }
// console.log(book1.getinfo())




// let count = 0;
// for(let i = 1;i <= 50;i++) {
//   count += 100/i;
// }
// console.log(count);
// ------------- W3 SCHOOLUM NAYEL FUNCTION CALL,BIND,APPLY, U STRING U ARRAY METHODNERY--------------


// const res = [0,1,2,3,4,5,NaN,false,"",undefined].filter((a)=> a < 1)
// console.log(res);

// const res = [0,1,2,3,4,5,NaN,false,"",undefined].filter((a)=> false)
// console.log(res);  



// let z = 18.8;
// let z1 = Math.floor(z);
// console.log(z1);

// let z = 14.2;
// let z1 = Math.ceil(z);
// console.log(z1);

// let z = 13.51;
// let z1 = Math.round(z);
// console.log(z1);

// let z = 13.49;
// let z1 = Math.round(z);
// console.log(z1);



// let one = Math.random(); // 0-ic minchev 1 a berelu
// let two = Math.random();
// let three = Math.random();
// console.log(one,two,three);



// function random(a,b) {
//   const diff = b - a + 1
//   return Math.floor(Math.random()*diff + a)
// }

// console.log(random(100,200));

// const numbers = [];
// for(let i = 0;i <4; i++) {
//   numbers.push(random(100,200))
// }

// console.log(numbers);
// // TNAYIN XNDIR _+_+_______-------datark massivy lcnel 10 elementov u yntrel amenamecy mijakayqy 1000-2000 u -5 - 10
// let minus = 0;
// let array = [1,4,6,2,0,8,0,7,3,0]
// for (let i = 0; i < array.length; i++) {
//   if(array[i] === 0) {
//     while (array[array.length - 1] - minus == 0) {
//       o++;
//     }
//   }
// }
// function ParzTiv(x) {
//   for (let i = 2; i < x/2; i++) {
//     if (x%i === 0) {
//       return false
//     }   
//   } 
//   return true;
// }
// console.log(ParzTiv(1116));



// function random(a,b) {
//   const diff = b - a + 1
//   return Math.floor(Math.random()*diff + a)
// }
// const  names = ["Armen","Vahe","Artak","Gor","Artur","Anzhela","Vlad","Lilya","Satenik","Martin","Gagik","Stepan","Vitali","Arman"]
// function extractRandom(arr){
//     const index = 
// }
// _____-----lracnel esi nkary ka ______--------------_________--------_______



// function magic(question) {
//   return Math.random() > 0.5
// }
// const question = "can i help you ?"
// let result = magic(question)? "yes" : "no";
// console.log(`${question} ${result}`);



// let max = Math.max(12,34,8,66,134,60);
// let min = Math.min(12,34,8,66,134,60);
// console.log(`"Maximum value is" ${max}`);
// console.log(`"Minimum value is" ${min}`);

// const nums = [43,29,68,95,35]
// let[one,two,three] = nums;
// let max = Math.max(one,two,three);
// console.log(max);
// console.log(one,two,three);



// const arr = [15,64,32,19,7,96,35,25];
// let arr1 = [...arr];
//  console.log(arr);
//  console.log(arr1);
//  arr1[2][0] = "Armen "
// let max = Math.max(...arr)
// console.log(max);


// console.log(Math.pow(3,4)); //astichan a barzracnum
// console.log(Math.sqrt(25)); //armatn a gtnum
// console.log(Math.cbrt(-27)); // xoranardi armat a talis


// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT2);


// function circle(r) {
//   let s = Math.PI * (r**2); //qarakusi a barzracnum math.pow i nman
//   let l = 2 * Math.PI * r;
//   return `s = ${Math.floor(s)}, l = ${Math.floor(l)}`
// }
// console.log(circle(3));




// function changStr(str) {
//   let str1 = "";
//   for(let i = 0;i < str.length;i++) {
//     str1 = str1 + "*"
//   }
//   return str1;
// }
// console.log(changStr("artak"));

// let str = "barev dzez narek es hay em narek";
// let aray = ["narek","es","barev","narek"];

// let obj = {}

// for(let i = 0; i < aray.length;i++) {
//   if(obj[aray[i]] === undefined) {
//     obj[aray[i]] = 1;
//   } else {
//     obj[aray[i]]++
//   }
// }


// let arr = str.split(" ");

// for(let i = 0; i < arr.length;i++) {
//   if(obj[arr[i]]){
//     arr[i] = changStr(arr[i])
//   }
// }
// console.log(arr);
// console.log(arr.join(" "));


// let now = new Date();
// console.log(now);



// const year = 1985,
//       month = 4,
//       day = 17,
//       hour = 6,
//       minute = 34,
//       second = 22;


//       let bd = new Date(year,month,day,hour,minute,second)
      // console.log(bd);
      // console.log(bd.getFullYear() );
      // console.log(bd.getMonth());
      // console.log(bd.getDate());
      // console.log(bd.getDay());
      // console.log(bd.getHours());
      // console.log(bd.getMilliseconds());
      // console.log(bd.getTime());
      // console.log(bd.setFullYear() );
      // console.log(bd.setMonth());
      // console.log(bd.setDate());
      // console.log(bd.setDay());
      // console.log(bd.setHours());
      // console.log(bd.setMilliseconds());
      // console.log(bd.setTime())




      
      // let str = "Հայաստանի լեռնաշխարհի բնությունը գեղեցիկ է"
      // let str1 = "ություն"
      // let arr = str.split(" ")
      // for(let i = 0;i < arr.length;i++) {
      //   let index = arr[i].indexOf(str1);
      //   let lastindex = arr[i].lastIndexOf(str1)
      //   if(index = lastindex && index !== -1) {
      //     console.log(arr[i]);
      //   }
      // }
    

      // if(console.log("Barev");) {
      // console.log("barev")
      // } else {console.log("Armen");}



//  for (let i = 1; i <= 100; i++) {
//   for (let b = 1; b <= 100; b++) {
//     if(i * b === 2 * (i+b)){
//       console.log(`I = ${i} B = ${b}`);
//     }
//   } 
//  }