console.log(`TESTING!`)

//class
class Character {
    constructor(name) {
        this.name = name
        this.hunger = 7
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
    feed() {
        if (this.hunger >= 10) {
            return
        } else {
            this.hunger ++
        }
    }
    sleep() {
        if (this.sleepiness >= 10) {
            return
        } else {
            this.sleepiness ++
        }
    }
    play() {
        if (this.boredom >= 10) {
            return
        } else {
            this.boredom ++
        }
    }
}

//constants (might need to change to lets)
const hunger = document.querySelector(`#hunger`)
const sleepiness = document.querySelector(`#sleepiness`)
const boredom = document.querySelector(`#boredom`)
const age = document.querySelector(`#age`)
const character = document.querySelector(`#character`)
const characterName = document.querySelector(`#character-name`)

//game function
const runGame = () => {
    let name = prompt(`Choose your pet's name!`, `Turdle`)
    const character = new Character(`${name}`)
    hunger.innerHTML = character.hunger
    sleepiness.innerHTML = character.sleepiness
    boredom.innerHTML = character.boredom
    age.innerHTML = character.age
    characterName.innerHTML = `LVL 1 ${character.name}`
}

//begin button
const beginBtn = document.querySelector(`#begin`)
beginBtn.addEventListener(`click`, runGame)

