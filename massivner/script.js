var sum = 0;

    let arr = [2,5,7,12,34,56,71,0,54,4,34,50,1,3,7]; 
for (let i = 0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum)


var sum = 0;

    let arr1 = [2,5,7,12,34,56,71,0,54,4,34,50,1,3,7]; 
for (let i = 0; i<arr1.length; i++) {
    sum += arr1[i];

}
console.log(sum/arr1.length)



let arr2 = [2,5,7,12,34,56,71,0,54,4,34,50,1,3,7]; 
arr2.reverse();
console.log(arr2);

let arr3 = [2,5,7,12,34,56,71,0,54,4,34,50,1,3,7]; 
var min = Math.min.apply(null, arr3);
var max = Math.max.apply(null, arr3);
console.log(min);
console.log(max);



var arr4 = [2,5,7,12,34,56,71,0,54,4,34,50,1,3,7]; 


for (let i = 0; i < arr4.length; i++) {
  if ((arr4[i] % 2) ===0){
    console.log(arr4[i]);
  } else {
    console.log(0);
  }

    }
