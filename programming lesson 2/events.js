//1.
// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");

// function change(){
//     console.log("clicked");
//     h1.innerHTML = "changed from JS"
// }
// button.addEventListener("click",change)



//2.
// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let input = document.querySelector("input");

// function change(){
//     h1.innerHTML = input.value
// }

// button.addEventListener("click",change);



//3.
// let h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter",function(){
//     console.log("Mouse has entered h1");
// })
// h1.addEventListener("mouseleave",function(){
//     console.log("Mouse has left h1");
// })



//4.
// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter",function(){
//    this.style.color = "red";
//    this.style.backgroundColor = "blue";
//    this.style.border = "1px solid green"
// })
// h1.addEventListener("mouseleave",function(){
//     this.style.color = "white";
//     this.style.backgroundColor = "yellow";
//     this.style.border = "1px solid green"
//  })




//5.
// let divs = document.querySelectorAll("div");
// console.log(divs);

// for(let i = 0;i < divs.length;i++) {
//     divs[i].addEventListener("click",function(){
//         console.log(this.getAttribute("id"));
//     })
// }

// GREL 5.1 y
//5.2
// let divs = document.querySelectorAll("div");
// let link = document.querySelector("a");
// for(let i = 0;i < divs.length;i++) {
//     divs[i].addEventListener("click",function(event){
//         // console.log(event);
//         event.stopPropagation();
//         console.log(this.getAttribute("id"));
//     })
// }
// link.addEventListener("click",linkClick)

// function linkClick(event){
//     event.preventDefault();

//     let div = divs[0];
//     div.style.display = div.style.display === "none"? "flex" : "none"
// }



//6.1
// let p = document.querySelectorAll("p");

// for(let i = 0;i < p.length;i++) {
//     p[i].addEventListener("click",function(event){
//         event.target.style.color = "blue"
//     })
// }

//6.2
// document.getElementById("wrapper").addEventListener("click",function(event){
//     console.log(event.target.tagName);

    //1
    // let tagName = event.target.tagName.toLowerCase()
    // if(tagName === "p") {
    //     event.target.style.color = "blue"
    // }
    //2
//     if(event.target.classList.contains("color")){
//         event.target.style.color = "red"
//     }
// })

// TUNY ANEL
// stexcel input taky knopka lini, inputum henc tiv grenq miangamic vekali u koxqy tpi et tvi qarakusiv; ete barer tanq koxqy ramki mej  gri eti,ramken qo chashakov:
