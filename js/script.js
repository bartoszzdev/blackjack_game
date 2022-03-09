let player = {
    name: "Claudinei",
    chips: 185,
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13)

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Still in the game, wanna draw a new card?"
    } else if (sum === 21) {
        message = "Well done, you've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "Too bad, you're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}`
    }
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) { 
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


















