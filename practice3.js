let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
/*4 buttons
let started=false;
*/
/*
abhi tk start nhi huwa hai or Ye ek flag (switch) hai means 
false → game start nahi hua
true → game start ho chuka hai
*/
let level=0;//start nhi huwa hai to level 0 hai
document.addEventListener("keypress",function(){
    /*
    jb bhi user koi bhi keyword dbaye ga to niche 
    wala function execute hoga
    */
    if(started==false){
        console.log("game is started");
        /*
        not so much use of this console
        */
        started=true;
/*
ab humne game ko bata diya ki "game ab start hona hai tumko"
*/
        levelup();
        /*ab "Press Any Key To Start game" ki jgah per level 1 dikhayega 
        hmne level up function ko call kiya jo ki niche hai+*/
    }
    });
     
    
    
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    /* userSeq khali hai means har new level me user ko fresh se sequence repeat kerna padta hai
    aur isko ek arr isiliye diya gya hai kyuki shuru se sare color store krna hai*/
level++;
/*
level ko plus krna hai
*/
h2.innerText=`level ${level}`;
/* 
h2 ke inner text me 
level update hone ke bad ye store krna hai
*/
let randIdx=Math.floor(Math.random()*4);
/*
ye 0 se 3 tk koi bhi ek 
random number generate krega.
*/
let randColor=btns[randIdx];
/*
ye jo randColor hai ye ek new variable hai.
hmne jo btns me 4 color 
array ke forrm me line number 4 me jo store 
kraya tha index ke hisab se koi bhi ek random color ke value
 randColor wale variable me store ho jayegi.
 aur ek bar me ek hi color store hoga kuyki hmne
 use ek variable bnaya hai naki ek array.  
*/
let randbtn=document.querySelector(`.${randColor}`);
//console.log(randIdx);
//console.log(randColor)
/*

Yha  randbtn ek new variable hai.
ye ek class ko acceass kr rha hai.
jo ki html me buttons ko di gyi hai.
aur ye  ek random color ke hi class ko access kr rha hai jo ki
let randColor=btns[randIdx]; se aa rha hai.
isme color ko class ka name de diya gya hai jis wjh se color se hi 
class excess ho ja rha hai.

*/

gameSeq.push(randColor);
//random button
gameFlash(randbtn);
console.log(gameSeq);
}
function checkAns(idx){
   
   
   if(userSeq[idx]==gameSeq[idx]){
if(userSeq.length==gameSeq.length){
setTimeout(levelup,1000);
    
   }
}
   else{
    h2.innerHTML=`Game Over! Your Score Was<b>${level}</b><br> Press Any Key To Start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
   }
}




function btnpress(){
let btn=this;
userFlash(btn);
userColor=btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
    
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
