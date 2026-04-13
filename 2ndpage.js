let params=new URLSearchParams(window.location.search);
let minutes=parseInt(params.get('time')|| 4 ) ; // store locally the user input i wish i could do it directly
let x= document.querySelector(".clock");
let seconds=60;
 

let lastsahi;
let totalsahi;
let newtotalsahi=0;
let right;
let currright;
let currentwrong;
let wrong;
let timer;
let sum;
let clockdiv=document.querySelector('.clock');
clockdiv.textContent = `${minutes+1}:00`;


function xy(){
     //this code stores the time running from page
 

console.log("time is running "+x.innerText);
localStorage.setItem('timerunning',x.innerText);//this code stores the time running from page
seconds=seconds-1;
// console.log(seconds);
x.textContent=`${minutes}:${seconds}`;
if(minutes===0 && seconds===0){
    console.log("your time is up"+minutes);
clearInterval(timer);// reset the time
   let time=x.innerText;

window.location.href="Resultr.html","_blank";  // this will take to result page when time is up
}
else if (seconds===0){
    minutes=minutes-1;
    // console.log("minute"+minutes);
seconds=60

}}
function startTi(){
    timer=setInterval(xy,1000);
}
// this will start timer
 let quote = document.querySelector('.loading');
let inputArea = document.querySelector('#input-area');
let sentences = [];
let targetText = "";

//  Fetch text and split into sentences safely
fetch("data.txt")
  .then(function(resp){
     return resp.text()})
  .then(dta => {

    // Split text into sentences (handles quotes and apostrophes)
    sentences = dta.match(/[^.]+/g) || [];
    console.log(sentences);
    sentences = sentences.map(function(s){return s.trim();});
    // Pick one random sentence
    targetText = sentences[Math.floor(Math.random() * sentences.length)];
    quote.innerText = targetText;
  })
      inputArea.focus(); //  every time cursor get on input area
localStorage.clear();
// Typing check
inputArea.addEventListener("input", function() {
  let inputText = inputArea.value;
  let formatted = "";
  let correctChars = 0;
  let incorrectChars = 0;
 
  for (let i = 0; i < targetText.length; i++) {
     if (i < inputText.length) {
  
      if (inputText[i] === targetText[i]) {
        formatted =formatted + `<span class="correct">${targetText[i]}</span>`;
        correctChars++; // keep in mind this is in loop so, everytime it continues up to inputtext.length and return 0 
           // previous comment continue, and on every click it gets 0
     localStorage.setItem('correctchars',correctChars);
        //console.log("correctChars",correctChars);
      } else {
        formatted =formatted + `<span class="incorrect">${targetText[i]}</span>`;
        incorrectChars=incorrectChars+1;
       localStorage.setItem('incorrectchars',incorrectChars);

        //console.log("incorrectChars",incorrectChars);
      }
     } else {
         formatted = formatted + targetText[i];// this keeps remainig text untouched no color
     }
  }
  // this code continues the correct counting 
currright=JSON.parse(localStorage.getItem('correctchars')) || 0;
  right=JSON.parse(localStorage.getItem('totalsahi')) || 0;
console.log("current totalsahi are  ", right);
console.log("current rightchars are ", currright);
right=right+currright;
console.log("sum of both chars are ", right);
// this code continues the incorrect counting
currentwrong=JSON.parse(localStorage.getItem('incorrectchars')) || 0;
console.log("current galat are ", currentwrong);
wrong=JSON.parse(localStorage.getItem('totalgalat')) || 0;
console.log("previous totalgalat are ", wrong);
wrong=wrong+currentwrong;
console.log("sum of both incorrect chars are ", wrong);
  quote.innerHTML = formatted; //this will update everytime user enter
  // this will bring next text either user type right or wrong
   if (inputText.length === targetText.length && targetText !== "") { // this code function is to bring next sentence after completing one
    inputArea.value = "";
    targetText = sentences[Math.floor(Math.random() * sentences.length)];
    quote.innerHTML = targetText;
    let sahi = JSON.parse(localStorage.getItem('correctchars')) || 0;  //obtained from local storage
    let galat = JSON.parse(localStorage.getItem('incorrectchars')) || 0; //obtained from local storage
     lastsahi = JSON.parse(localStorage.getItem('totalsahi')) || 0;// previous total correct chars from local storage
    let lastgalat = JSON.parse(localStorage.getItem('totalgalat')) || 0;// previous total incorrect chars from local storage
    // compute new totals here
     newtotalsahi = lastsahi + sahi;
    console.log("newtotalsahi", newtotalsahi);
    let newtotalgalat = lastgalat + galat;
    console.log("newtotalgalat", newtotalgalat);
    // update localStorage with new totals
  localStorage.setItem('totalsahi', JSON.stringify(newtotalsahi));
    localStorage.setItem('totalgalat', JSON.stringify(newtotalgalat));

}
// stores continues right chars locally
localStorage.setItem('continueright', JSON.stringify(right)); 
localStorage.setItem('continuewrong', JSON.stringify(wrong) );
});
// let inputimer=document.querySelector("#input-area");// global scope for input field
//time will start when we enter any text in input field
let timestar=false;
  
inputArea.addEventListener("beforeinput", function (e) {
  if (e.inputType === "insertFromPaste") {
    e.preventDefault();
    alert(" 🚫 Copy paste is not allowed!");
  }
});



inputArea.addEventListener("input",function(){
  if(!timestar && inputArea.value !=="")  {
    startTi();   // Time function is decleared here
    timestar=true;
  }
});

localStorage.setItem('storedtime',JSON.stringify(minutes+1));//this one is for result time
let gotores=document.querySelector('#close');
gotores.addEventListener('click',function(){
window.location.href='Resultr.html'});

let gotoresult=document.querySelector('#restart');
gotoresult.addEventListener('click',function(){
window.location.href='index.html'});




















  
