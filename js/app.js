console.log(`TESTING!`)

//constants (might need to change to lets)
const hunger = document.querySelector(`#hunger`)
const sleepiness = document.querySelector(`#sleepiness`)
const boredom = document.querySelector(`#boredom`)
const age = document.querySelector(`#age`)
const characterImg = document.querySelector(`#character`)
const characterName = document.querySelector(`#character-name`)

//class
class Character {
    constructor(name) {
        this.name = name
        this.hunger = 5
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
    feed() {
        if (this.hunger >= 10) {
            return
        } else {
            this.hunger ++
            hunger.innerHTML = this.hunger
        }
    }
    sleep() {
        if (this.sleepiness >= 10) {
            return
        } else {
            this.sleepiness ++
            sleepiness.innerHTML = this.sleepiness
        }
    }
    play() {
        if (this.boredom >= 10) {
            return
        } else {
            this.boredom ++
            boredom.innerHTML = this.boredom
        }
    }
}

//button consts
const feedBtn = document.querySelector(`#feedBtn`)
const sleepBtn = document.querySelector(`#sleepBtn`)
const playBtn = document.querySelector(`#playBtn`)

//aging function
const agePet = (characterToAge) => {
    characterToAge.age ++
    age.innerHTML = characterToAge.age
    console.log(`yo`)
}

//game function
const runGame = () => {
    // alert(`Welcome to the most epic Tamagotchi game!`)
    // alert(`After entering your pet's name and clicking the begin game button, a timer will begin that slowly lowers your stats as well as slowly aging your pet.`)
    // alert(`Once a stat reaches 0, it's game over! Click the different activity buttons to up your pet's stats and stay alive.`)
    // alert(`Eventually, when your pet is old enough, it will evolve. Try to make it to the last evolution!`)
    let name = prompt(`Choose your pet's name!`, `Turdle`)
    const character = new Character(`${name}`)
    hunger.innerHTML = character.hunger
    sleepiness.innerHTML = character.sleepiness
    boredom.innerHTML = character.boredom
    age.innerHTML = character.age
    characterImg.src = `images/stg-1.png`
    characterImg.style.width = `125px`
    characterName.innerHTML = `LVL 1 ${character.name}`
    feedBtn.addEventListener(`click`, () => {character.feed()})
    sleepBtn.addEventListener(`click`, () => {character.sleep()})
    playBtn.addEventListener(`click`, () => {character.play()})
    setInterval(agePet(character), 1000)
}

//begin button
const beginBtn = document.querySelector(`#begin`)
beginBtn.addEventListener(`click`, runGame)










    // if (characterToAge.age = 14) {
    //     characterImg.src = `images/stg-4.png`
    //     character.age ++
    // }
    // if (character.age = 9) {
    //     characterImg.src = `images/stg-3.png`
    // }
    // if (character.age = )