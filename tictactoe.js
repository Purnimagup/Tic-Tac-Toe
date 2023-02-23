console.log("welcome to Tic-Tac-Toe")
let music = new Audio("songs/1.mp3")
let Turn = new Audio("ting.mp3.mp3")
let gameover = new Audio("day.mp3")
let turn = "X"
//let wins = document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
let Gameover = false;

// finction to change the turn 
const changeturn = ()=>{
    return turn === "X" ? "0":"X"
}

// function to check win
const checkwin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
 let wins = [
    [0,1,2,5,-10,90],
    [3,4,5,5,0,90],
    [6,7,8,5,10,90],
    [0,3,6,-5,0,0],
    [1,4,7,5,0,0],
    [2,5,8,15,0,0],
    [0,4,8,5,0,60],//5,0,134
    [2,4,6,5,0,47],
 ]
 wins.forEach(e =>{
  if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&((boxtext[e[0]].innerText !=="" ))) {
    document.querySelector('.info').innerText=boxtext[e[0]].innerText+" WON";
   // document.querySelector('info').transition = rotate;
    gameover.play();
    Gameover = true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
    //document.querySelector(".line").style.width ="2vw";
    document.querySelector(".line").style.transform =` translate($(e[4])vw,$(e[4])vw) rotate($(e[])deg  )`; 
    
  }
 })
}

//GAme logic
let boxes  = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxtext.innerText === ''||boxtext.innerText === 'X'||boxtext.innerText === 'O'){
        Turn.play();
      boxtext.innerText = turn;
    turn= changeturn();
     //Turn.play();
     checkwin();
     if(!Gameover ){
     document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    }
}// document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
  })
})
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
    })
   turn ="X"
   Gameover=false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
     gameover.pause();
})
