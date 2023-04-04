"use strict";

const $ = (selector) => document.querySelector(selector);

let timerCounter = 10;
let timer;

const goToTerms= ()=>{
    timerCounter -= 1;
    if(timerCounter > 0){
        $("#seconds").textContent = timerCounter;
    }else{
        window.location.href = "terms"
    }
}
const toggleQuestion = (evt)=>{
    evt.currentTarget.classList.toggle("minus");
  let answerDiv =  evt.currentTarget.nextElementSibling;

  answerDiv.classList.toggle("open");


}
const acceptTerms = ()=>{
    clearInterval(timer)
    $("#terms").setAttribute("class", "hidden");

}

document.addEventListener("DOMContentLoaded", () => {
    $("#seconds").textContent = timerCounter;
    //step 1: check if user accepted the terms
    const query = window.location.search;
    const urlParameters = new URLSearchParams(query);
    const accepted = urlParameters.get("accepted");
    
    
    $("#accept").addEventListener("click", acceptTerms);
    
    const h2Elements = document.querySelectorAll("h2");

    for(let h2 of h2Elements){
        h2.addEventListener("click", toggleQuestion);
    }
    
    if(accepted){
        $("#terms").setAttribute("class", "hidden");
    }else{
    timer = setInterval(goToTerms, 1000);
    }
});
