const { getJoke, getRandomJoke } = require('jokifie')

getRandomJoke().then( async (joke) => {
    console.log(joke)
})