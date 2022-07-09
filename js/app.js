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
        if (this.hunger <= 0) {
            return
        } else {
            this.hunger --
            hunger.innerHTML = this.hunger
        }
    }
    sleep() {
        if (this.sleepiness <= 0) {
            return
        } else {
            document.body.style.backgroundImage = `url('../tamagotchi-project/images/windows-bg-night.jpeg')`
            this.sleepiness --
            sleepiness.innerHTML = this.sleepiness
            setTimeout(() => {document.body.style.backgroundImage = `url('../tamagotchi-project/images/windows-bg.jpeg')`}, 2000)
        }
    }
    play() {
        if (this.boredom <= 0) {
            return
        } else {
            this.boredom --
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
    if (characterToAge.age === 14) {
        characterImg.src = `images/stg-4.png`
        characterToAge.age ++
        age.innerHTML = characterToAge.age
        characterName.innerHTML = `LVL 4 ${characterToAge.name}`
        characterImg.style.width = `350px`
    }
    if (characterToAge.age === 9) {
        characterImg.src = `images/stg-3.png`
        characterToAge.age ++
        age.innerHTML = characterToAge.age
        characterName.innerHTML = `LVL 3 ${characterToAge.name}`
        characterImg.style.width = `250px`
    }
    if (characterToAge.age === 4) {
        characterImg.src = `images/stg-2.png`
        characterToAge.age ++
        age.innerHTML = characterToAge.age
        characterName.innerHTML = `LVL 2 ${characterToAge.name}`
        characterImg.style.width = `250px`
    } else {
        characterToAge.age ++
        age.innerHTML = characterToAge.age
    }
}

//stats increase over time function
const statsInc = (nameOfChar) => {
    nameOfChar.hunger ++
    hunger.innerHTML = nameOfChar.hunger
    nameOfChar.sleepiness ++
    sleepiness.innerHTML = nameOfChar.sleepiness
    nameOfChar.boredom ++
    boredom.innerHTML = nameOfChar.boredom
}

//game function
const runGame = () => {
    alert(`Welcome to the most epic Tamagotchi game!`)
    alert(`After entering your pet's name, a timer will begin that slowly raises your stats as well as slowly aging your pet.`)
    alert(`Once a stat reaches 10, it's game over! Click the different activity buttons to keep your  pet's stats down and stay alive.`)
    alert(`Eventually, when your pet is old enough, it will evolve. Try to make it to the last evolution!`)
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
    const ageInterval = setInterval(() => {agePet(character)}, 2000)
    const statInterval = setInterval(() => {statsInc(character)}, 3000)
    const deadInterval = setInterval(() => {
        if (character.hunger === 10 || character.sleepiness === 10 || character.boredom === 10) {
            clearInterval(ageInterval)
            clearInterval(statInterval)
            characterImg.style.animationName = `paused`
            characterImg.src = `images/tombstone.png`
            characterImg.style.width = `200px`
            alert(`Boooooo! You have failed as a caretaker. Your pet has moved on to the next plane of existence. Press the "Begin Game" button to try again!`)
            clearInterval(deadInterval)
        }
    }, 1000)
}

//begin button
const beginBtn = document.querySelector(`#begin`)
beginBtn.addEventListener(`click`, runGame)










