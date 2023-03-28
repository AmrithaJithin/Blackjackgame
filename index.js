
cardsarr=[]
let sum= 0 // sum to dispaly
//let result= card_1+card_2

hasblackcard=false
isalive=false


let msg=document.getElementById("message00")
let sl1=document.getElementById("sl")  
              // let sl1 = document.querySelector("#sl")... another method to get id
             // .sl to select class  
let card11 = document.getElementById("cardl")
let player = {
    name:"a",score:145
}
let player_11=document.getElementById("player_1")
player_11.textContent=player.name + ": $" + player.score

// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
 
function start(){
     isalive = true
    let card_1=getRandomCard()
    let card_2=getRandomCard()
    cardsarr=[card_1,card_2]
     sum= card_1 + card_2 
    render()
}

function render()
{
    card11.textContent = "Cards: "  
for(i=0;i<cardsarr.length;i++){
     
    card11.textContent += cardsarr[i] + " "
}
sl1.textContent="Sum:" + sum
Message=""

if(sum<=20)
{
    Message="ok ok"
   
}
else if(sum===21)
{
    Message="winner"
    hasblackcard=true
   
}
else
{
    Message="out"
    isalive=false
   
}
//console.log(Message)
msg.textContent=Message



}

function newcard()
{
    if (isalive === true && hasblackcard === false) {
    let card=getRandomCard()
   //  let card0=8 // another index added
    sum += card // without changing the existing variable value aading new value to total sum
    cardsarr.push(card)
    console.log(cardsarr)
    // cardsarr.push(card0) 
    // console.log(cardsarr)
    render()
}
}

