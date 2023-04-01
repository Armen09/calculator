const button = document.querySelector(".btn");
const input = document.querySelector(".inp");
const res = document.querySelector(".res");

button.addEventListener("click",()=>{
    if(input.value !== ""){
       res.innerHTML = input.value
       console.log(typeof input.value);
    } else{
        res.innerHTML = "empty"
    }
})
