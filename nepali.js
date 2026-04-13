// this function will split nepali text
  function splitGraphemes(text) {
    const segmenter = new Intl.Segmenter('ne',{granularity:'grapheme'});
    return Array.from(segmenter.segment(text), function(s){return s.segment})
  }


let map = {'H':'अ',
  'd/y':'द्य',
  'A':'आ',
  'a':'ा',
  '[':'इ',
  '{':'ई',
  'Z':'ऋ',
  'f':'उ',
  'F':'ऊ',
   ']':'ए',
    '}':'ऐ',
    'O':'ओ',
    'W':'औ',
    'H':'अ',
    'M':'ं',
    'k': 'क',
  'K': 'ख',
  'g': 'ग',
  'G': 'घ',
  '<': 'ङ',
  'c': 'च',
  'C': 'छ',
  'j': 'ज',
  'J': 'झ',
  'Y': 'ञ',
  'q': 'ट',
  'Q': 'ठ',
  'x': 'ड',
  'X': 'ढ',
  'N': 'ण',
  't': 'त',
  'T': 'थ',
  'd': 'द',
  'D': 'ध',
  'n': 'न',
  'p': 'प',
  'P': 'फ',
  'b': 'ब',
  'B': 'भ',
  'm': 'म',
  'y': 'य',
  'r': 'र',
  'l': 'ल',
  'v': 'व',
  'S': 'श',
  'z': 'ष',
  's': 'स',
  'h': 'ह',
  'k/z': 'क्ष',
  't/r': 'त्र',
  'j/Y': 'ज्ञ',
  'R':'ृ',
  '/r':'्र',
  'i':'ि',
  'I':'ी',
  'u':'ु',
  'U':'ू',
  'o':'ो',
  'w':'ौ',
  'e':'े',
  'E':'ै',
  ':':'ः',
  // need to study this one this one is not happening because d/y is already being mapped
  '0':'०',
  ".":'।',
  "V":'ँ',
  '1':'१',
  '2':'२',
  '3':'३',
  '4':'४',
  '5':'५',
  '6':'६',
  '7':'७', 
  '8':'८',
  '9':'९',
 '/':'्',
    // Add more combinations as needed
  };
let inputArea = document.querySelector('#input-area');
  inputArea.addEventListener('input', function(e) {
    let value = inputArea.value;
    // Sort map by length descending to prioritize longer matches
   function escapeRegex(str) {
   return str.replace(/[.*+?^${} ()|\][\\/]/g, '\\$&');};//decoded successfully /] is there to escape ] bracket and \\ is there to escape \ bracket so simple
    const keys = Object.keys(map).sort((a,b)=>b.length-a.length);
    // keys.sort(function(a,b){return b.length-a.length});
    keys.forEach(function(key){
        let re=new RegExp(escapeRegex(key),'g');
        value=value.replace(re,map[key])//here it is not comparing just taking user input as key and its value is being replaced
    });
       
inputArea.value=value;

  });
var params=new URLSearchParams(window.location.search);
var minutes=parseInt(params.get('time')) ; 
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
clockdiv.textContent = `${minutes+1||5}:00`;
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
 inputArea = document.querySelector('#input-area');
let sentences = [];
let targetText = "";

//  Fetch text and split into sentences safely
fetch("nepali.txt")
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
 let inputarr=splitGraphemes(inputText);
let targetArr=splitGraphemes(targetText);

  for (let i = 0; i < targetArr.length; i++) {
     if (i < inputarr.length) {
  
      if (inputarr[i] === targetArr[i]) {
        formatted =formatted + `<span class="correct">${targetArr[i]}</span>`;
        correctChars++; // keep in mind this is in loop so, everytime it continues up to inputtext.length and return 0 
           // previous comment continue, and on every click it gets 0
     localStorage.setItem('correctchars',correctChars);
        //console.log("correctChars",correctChars);
      } else {
        formatted =formatted + `<span class="incorrect">${targetArr[i]}</span>`;
        incorrectChars=incorrectChars+1;
       localStorage.setItem('incorrectchars',incorrectChars);
        console.log("hello i am incorrect here please notice me in console i am",incorrectChars);
      }
     } else {
         formatted = formatted + targetArr[i];// this keeps remainig text untouched no color
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
   if (inputarr.length === targetArr.length && targetArr !== "") { // this code function is to bring next sentence after completing one
    inputArea.value = "";
    targetArr = sentences[Math.floor(Math.random() * sentences.length)];
    quote.innerHTML = targetArr;
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
let inputimer=document.querySelector("#input-area");// global scope for input field
//time will start when we enter any text in input field
let timestar=false;
inputimer.addEventListener("input",function(){
  if(!timestar && inputimer.value !=="")  {
    startTi();   // Time function is decleared here
    timestar=true;
  }
});
localStorage.setItem('storedtime',JSON.stringify(minutes+1));//this one is for result time

let gotores=document.querySelector('#close');
gotores.addEventListener('click',function(){
window.location.href='Resultr.html'



})
let gotoresult=document.querySelector('#restart');
gotoresult.addEventListener('click',function(){
window.location.href='index.html'});

inputArea.addEventListener('paste',function(e){
e.preventDefault();
alert("नकलले होइन, मेहनतले चिनिन्छ ज्ञान,")});














  
