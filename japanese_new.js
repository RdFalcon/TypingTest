let map1={ //katakana
  // Vowels
  'a':'ア', 'i':'イ', 'u':'ウ', 'e':'エ', 'o':'オ',
  ',':'、','(':'「',

  // K row
  'ka':'カ', 'ki':'キ', 'ku':'ク', 'ke':'ケ', 'ko':'コ',
  'kya':'キャ', 'kyu':'キュ', 'kyo':'キョ',

  // S row
  'sa':'サ', 'shi':'シ', 'su':'ス', 'se':'セ', 'so':'ソ',
  'sha':'シャ', 'shu':'シュ', 'sho':'ショ',

  // T row
  'ta':'タ', 'chi':'チ', 'tsu':'ツ', 'te':'テ', 'to':'ト',
  'cha':'チャ', 'chu':'チュ', 'cho':'チョ',

  // N row
  'Na':'ナ', 'Ni':'ニ', 'Nu':'ヌ', 'Ne':'ネ', 'No':'ノ',
  'Nya':'ニャ', 'Nyu':'ニュ', 'Nyo':'ニョ',

  // H row
  'ha':'ハ', 'hi':'ヒ', 'fu':'フ', 'he':'ヘ', 'ho':'ホ',
  'hya':'ヒャ', 'hyu':'ヒュ', 'hyo':'ヒョ',

  // M row
  'ma':'マ', 'mi':'ミ', 'mu':'ム', 'me':'メ', 'mo':'モ',
  'mya':'ミャ', 'myu':'ミュ', 'myo':'ミョ',

  // Y row
  'ya':'ヤ', 'yu':'ユ', 'yo':'ヨ',

  // R row
  'ra':'ラ', 'ri':'リ', 'ru':'ル', 're':'レ', 'ro':'ロ',
  'rya':'リャ', 'ryu':'リュ', 'ryo':'リョ',

  // W row
  'wa':'ワ', 'wo':'ヲ',

  // N
  'n':'ン',

  // Dakuten (ga, za, da, ba)
  'ga':'ガ', 'gi':'ギ', 'gu':'グ', 'ge':'ゲ', 'go':'ゴ',
  'gya':'ギャ', 'gyu':'ギュ', 'gyo':'ギョ',

  'za':'ザ', 'ji':'ジ', 'zu':'ズ', 'ze':'ゼ', 'zo':'ゾ',
  'ja':'ジャ', 'ju':'ジュ', 'jo':'ジョ',

  'da':'ダ', 'di':'ヂ', 'du':'ヅ', 'de':'デ', 'do':'ド',
  'dya':'ヂャ', 'dyu':'ヂュ', 'dyo':'ヂョ',

  'ba':'バ', 'bi':'ビ', 'bu':'ブ', 'be':'ベ', 'bo':'ボ',
  'bya':'ビャ', 'byu':'ビュ', 'byo':'ビョ',

  // Handakuten (pa)
  'pa':'パ', 'pi':'ピ', 'pu':'プ', 'pe':'ペ', 'po':'ポ',
  'pya':'ピャ', 'pyu':'ピュ', 'pyo':'ピョ',

  // Small vowels
  'xa':'ァ', 'xi':'ィ', 'xu':'ゥ', 'xe':'ェ', 'xo':'ォ',

  // Small ya/yu/yo
  'xya':'ャ', 'xyu':'ュ', 'xyo':'ョ',

  // Small tsu
  'xtsu':'ッ',

  // Additional sounds
  'fa':'ファ', 'fi':'フィ', 'fe':'フェ', 'fo':'フォ',
  'va':'ヴァ', 'vi':'ヴィ', 've':'ヴェ', 'vo':'ヴォ',
  'vu':'ヴ',

  // Long vowel mark
  '-':'ー'
};
let map2= { //hirakana
  // Vowels
  'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お',

  // K row
  'ka':'か', 'ki':'き', 'ku':'く', 'ke':'け', 'ko':'こ',
  'kya':'きゃ', 'kyu':'きゅ', 'kyo':'きょ',

  // S row
  'sa':'さ', 'shi':'し', 'su':'す', 'se':'せ', 'so':'そ',
  'sha':'しゃ', 'shu':'しゅ', 'sho':'しょ',

  // T row
  'ta':'た', 'chi':'ち', 'tsu':'つ', 'te':'て', 'to':'と',
  'cha':'ちゃ', 'chu':'ちゅ', 'cho':'ちょ',

  // N row
  'Na':'な', 'Ni':'に', 'Nu':'ぬ', 'Ne':'ね', 'No':'の',// this one also 
  'Nya':'にゃ', 'Nyu':'にゅ', 'Nyo':'にょ', // need to mention this in the page

  // H row
  'ha':'は', 'hi':'ひ', 'fu':'ふ', 'he':'へ', 'ho':'ほ',
  'hya':'ひゃ', 'hyu':'ひゅ', 'hyo':'ひょ',

  // M row
  'ma':'ま', 'mi':'み', 'mu':'む', 'me':'め', 'mo':'も',
  'mya':'みゃ', 'myu':'みゅ', 'myo':'みょ',

  // Y row
  'ya':'や', 'yu':'ゆ', 'yo':'よ',',':'、',

  // R row
  'ra':'ら', 'ri':'り', 'ru':'る', 're':'れ', 'ro':'ろ',
  'rya':'りゃ', 'ryu':'りゅ', 'ryo':'りょ',

  // W row
  'wa':'わ', 'wo':'を',

  // N
  'n':'ん',

  // Dakuten (GA, ZA, DA, BA)
  'ga':'が', 'gi':'ぎ', 'gu':'ぐ', 'ge':'げ', 'go':'ご',
  'gya':'ぎゃ', 'gyu':'ぎゅ', 'gyo':'ぎょ',

  'za':'ざ', 'ji':'じ', 'zu':'ず', 'ze':'ぜ', 'zo':'ぞ',
  'ja':'じゃ', 'ju':'じゅ', 'jo':'じょ',

  'da':'だ', 'di':'ぢ', 'du':'づ', 'de':'で', 'do':'ど',
  'dya':'ぢゃ', 'dyu':'ぢゅ', 'dyo':'ぢょ',

  'ba':'ば', 'bi':'び', 'bu':'ぶ', 'be':'べ', 'bo':'ぼ',
  'bya':'びゃ', 'byu':'びゅ', 'byo':'びょ',

  // Handakuten (PA)
  'pa':'ぱ', 'pi':'ぴ', 'pu':'ぷ', 'pe':'ぺ', 'po':'ぽ',
  'pya':'ぴゃ', 'pyu':'ぴゅ', 'pyo':'ぴょ',

  // Small vowels
  'xa':'ぁ', 'xi':'ぃ', 'xu':'ぅ', 'xe':'ぇ', 'xo':'ぉ',

  // Small ya/yu/yo
  'xya':'ゃ', 'xyu':'ゅ', 'xyo':'ょ',

  // Small tsu
  'xtsu':'っ',

  // Extra foreign sounds
  'fa':'ふぁ', 'fi':'ふぃ', 'fe':'ふぇ', 'fo':'ふぉ',
  'va':'ゔぁ', 'vi':'ゔぃ', 've':'ゔぇ', 'vo':'ゔぉ',
  'vu':'ゔ',

  // Long vowel mark (optional for matching katakana behavior)
  '-':'ー'
};
let activeone=map2;
document.querySelector("#changelanguage1").addEventListener("change",function(){
    if(this.checked){
activeone=map1;
    } else{
activeone=map2;
    };
console.log("switched",activeone);


});

let inputArea = document.querySelector('#input-area');
  inputArea.addEventListener('input', function(e) {
    let value = inputArea.value;
    // Sort map by length descending to prioritize longer matches
   function escapeRegex(str) {
   return str.replace(/[.*+?^${}()|\][\\/]/g, '\\$&');};//decoded successfully /] is there to escape ] bracket and \\ is there to escape \ bracket so simple
    const keys = Object.keys(activeone).sort((a,b)=>b.length-a.length);
    // keys.sort(function(a,b){return b.length-a.length});
    keys.forEach(function(key){
        let re=new RegExp(escapeRegex(key),'g');
        value=value.replace(re,activeone[key])//here it is not comparing just taking user input as key and its value is being replaced
    });
       
inputArea.value=value;

  });
 inputArea = document.querySelector('#input-area');
  inputArea.addEventListener('input', function(e) {
    let value = inputArea.value;
    // Sort map by length descending to prioritize longer matches
   function escapeRegex(str) {
   return str.replace(/[.*+?^${}()|\][\\/]/g, '\\$&');};//decoded successfully /] is there to escape ] bracket and \\ is there to escape \ bracket so simple
    const keys = Object.keys(map).sort((a,b)=>b.length-a.length);
    // keys.sort(function(a,b){return b.length-a.length});
    keys.forEach(function(key){
        let re=new RegExp(escapeRegex(key),'g');
        value=value.replace(re,map[key])//here it is not comparing just taking user input as key and its value is being replaced
    });
       
inputArea.value=value;

  });
let params=new URLSearchParams(window.location.search);
let minutes=parseInt(params.get('time')) ; // store locally the user input i wish i could do it directly
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
 inputArea = document.querySelector('#input-area');
let sentences = [];
let targetText = "";

//  Fetch text and split into sentences safely
fetch("japanese.txt")
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
window.location.href='Resultr.html'});

let gotoresult=document.querySelector('#restart');
gotoresult.addEventListener('click',function(){
window.location.href='index.html'});



inputArea.addEventListener('paste',function(e){
e.preventDefault();
alert("copy paste is not allowed !! ")});












  
