console.log(`TESTING!`)

class Character {
    constructor(name) {
        this.name = name
        this.hunger = 7
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
    feed() {
        this.hunger ++
    }
    sleep() {
        this.sleepiness ++
    }
    play() {
        this.boredom ++
    }
}

const hunger = document.querySelector(`#hunger`)
const sleepiness = document.querySelector(`#sleepiness`)
const boredom = document.querySelector(`#boredom`)
const characterName = document.querySelector(`#character-name`)


const runGame = () => {
    let name = prompt(`Choose your pet's name!`, `Turdle`)
    const character = new Character(`${name}`)
}

const beginBtn = document.querySelector(`#begin`)
beginBtn.addEventListener(`click`, runGame)

