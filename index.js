
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let startGameBtn = document.getElementById("startGame()")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


playerEl.textContent = player.name + " $" + player.chips

function getRandomCard(){
  let randomNumber =  Math.floor(Math.random()*13) + 1
  if (randomNumber > 10){ 
    return 10
  } else if (randomNumber === 1){
      return 11
  } else {
      return randomNumber 
  }
}


function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    for (let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    if(sum<=20){
        message = "Do you want to draw a new card?"
    } else if(sum===21){
        message = "You've got Blackjack"
        hasBlackjack = true
    } else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard(){
    if( isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}