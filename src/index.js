/*
    // const product = {
    //     name:'Influence'
    // }

    // const product = new Object({
    //     name:'The War Of Art'
    // })

    // Object.prototype.someNewMethod = () => {
    //     return 'new function'
    // }

    // console.log(product.someNewMethod())

    // Primitive values: string, number, boolean, null, undefined

    //Object: myObject --> Object.prototype --> null
    //Array: myArray --> Array.prototype --> Object.prototype --> null
    //Function: myFunc --> Function.prototype --> Object.prototype --> null
    //String: myString --> String.prototype --> Object.prototype --> null
    //Number: myNumber --> Number.prototype --> Object.prototype --> null
    //Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

*/
import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = ''
    guessesEl.textContent = game1.statusMessage
    
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*
    //making an http request

    // const request = new XMLHttpRequest()

    // request.addEventListener('readystatechange', (e) => {
    //     if(e.target.readyState === 4 && e.target.status){
    //         let data = JSON.parse(e.target.responseText)
    //         console.log(data)
    //     }else if (e.target.readyState === 4){
    //         console.log('an error has taken place')
    //     }
    // })

    // request.open('GET','http://puzzle.mead.io/puzzle?wordCount=2')
    // request.send()
*/

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(err)
// })
/*
    // getPuzzle('2', (err, puzzle) => {
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(puzzle)
    //     }
    // })
*/

// const countryCode = 'MX'
// getCountry(countryCode).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

/*
    // const countryRequest = new XMLHttpRequest()
    // const countryCode = 'CO'

    // countryRequest.addEventListener('readystatechange', (e) => {

    //     if(e.target.readyState === 4 && e.target.status){
    //         let data = JSON.parse(e.target.responseText)
    //         let country = data.find((country) => country.alpha2Code === countryCode)
    //         console.log(country.name)
    //     }else if (e.target.readyState === 4){
    //         console.log('An error has taken place')
    //     }

    // })

    // countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    // countryRequest.send()
*/

//fetch
// fetch('http://puzzle.mead.io/puzzle', {}).then((data) => {
//     if(data.status === 200){
//         // console.log(data.json())
//        return data.json()
//     }else{
//         throw new Error('Unable to fetch data')
//     }
// }).then(data => {
//     console.log(data.puzzle)
// })
// .catch((err) => {
//     console.log('Error')
// })