const slider = document.querySelector("input[type=range]");
const checkBox = document.querySelector("input[type=checkbox]");
const money = document.querySelector("#money");
const time = document.querySelector(".time");
const views = document.querySelector("#views");

let Mcounter = 2;
let Vcounter = 10;
let doller = Mcounter;
let pageView = Vcounter;




checkBox.addEventListener("change",(e)=>{
    if(!e.target.checked){
        Mcounter = 2;
        Vcounter = 10;
        time.innerHTML = "month";
    }
    else{
        Mcounter = 16;
        Vcounter = 45;
        time.innerHTML = "Year";
    }
})

slider.addEventListener("click",(e)=>{
    
    doller=e.target.value * Mcounter;
    pageView=e.target.value * Vcounter;
    views.innerHTML = `${pageView} `;
    money.innerHTML = `${doller}`;


})