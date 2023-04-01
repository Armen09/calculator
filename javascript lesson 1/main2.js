// 1. araji tary mecatar mnacacy poqratar
// let str = "bAreR";
// let str2 =  str.toUpperCase();
// str2 = str2.split("");
// for(let i = 1;i <str2.length;i++) {
// str2[i] = str[i].toLowerCase(); 
// }

// let str = "bAreR";
// str = str.toLowerCase();
// str = str.split("")
// str[0] = str[0].toUpperCase() ;
// str = str.join("");

// 2. aranc argumentneri tvi qarakusi a hanum 
// function multiplyByTwo(...res) {
//     return res.map((val) => val**2)
// }
// console.log(multiplyByTwo(15,1,0,3,11));

//3.
// let arr = [2,2,2]
// let map = (i,j)=>i*j;
// let res = arr.map(map)
// console.log(res);

//4. splice funccian, 1 erord hamaric vekalum a 2 hat popoxakan u poxum a mayr massivy
// let res = [4,5,6,7,8,9,10]
// let val = res.splice(1,2)
// console.log(val);
// console.log(res);
// console.log(res.splice(1,2));

//4. et y = 5 nshanakum a vor y ete chgrem 5 a vekalelu
// function func(x,y = 5) {
//     return x+y
// }
// console.log(func(5,null));

//5. returnic heto karas gres x
// let x = 2019;
// function func(){
//     func1();
//     return;
// }
// function func1(){
//     x = 2020
// }
// console.log(func());
// -----------==========nayel classner ===========-----------------

//6. static jnjel
// class Car {
//     static getname(){
//         return "BMW"
//     }
// };
// let car = new Car();
// console.log(car.getname());

//7.
// let func = (x)=>{
//     let y = x * 10
// }
// console.log(func(5));


//8. es hazarnery te qani milivayrkyan heto a tpelu
// (function(){
//     setTimeout(()=>console.log(1),4000);
//     console.log(2);
//     setTimeout(()=>console.log(3),2000);
//     console.log(4);
// })()

//9.
// let a = 3;
// let b = -2;
// console.log(a > 0 && b < 0);

//10. esi inqnakanch funcciya a
// (function(x){
//     x++
//     return (function(y){
//         console.log(y+x);
//     })(2)
// })(1)

//10.
// const a = [1,2,3];
// const b = [1,2,3];
// const c = console;
// c.log(a == b);
// c.log(a === b);
// c.log(a === [1,2,3]);
// c.log(a == [1,2,3])

//11.
// let arr = [17,5,10];
// console.log(arr.reduce((acc,currvalue)=>{
//     acc = currvalue % acc;
//     return acc
//     },7))

//12.
// let a = {x:1};
// let b = {x:2};
// let c = {x:3};
// let arr = [a,b,c];
// arr.forEach((obj)=>{
//     obj.x += 1
// })
// console.log(a.x ,b.x,c.x);
