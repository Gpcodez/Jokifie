const fs = require('fs').promises;
const colors = require('colors');
const path = require('path');

async function getJoke(category) {
    if (!category) {
        console.log(colors.brightRed('[Jokifie] Error: No category was provided, use getRandomJoke() to get random.'));
        return null; 
    }

    let categories = [
        "Animals",
        "Lawyer",
        "Doctor",
        "Teacher",
        "Technology",
        "Programming",
        "Food",
        "Sports",
        "Math",
        "Science",
        "Office",
        "Holiday"
    ];

    if (!categories.includes(category)) {
        console.log(colors.brightRed('[Jokifie] Error: Invalid category was provided. Check Documentation.'));
        return null; 
    }

    try {
        const jokesFilePath = path.resolve(__dirname, '../jokes.txt');
        const data = await fs.readFile(jokesFilePath, 'utf-8');
        const jokes = parseJokes(data, category);
        if (jokes.length === 0) {
            console.log(colors.brightRed(`[Jokifie] Error: No jokes found for category: ${category}.`));
            return null; 
        }
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        return joke;
    } catch (error) {
        console.error(colors.brightRed(`[Jokifie] Error getting jokes: ${error.message}`));
        return null; 
    }
}

async function getRandomJoke() {
    try {
        const jokesFilePath = path.resolve(__dirname, '../jokes.txt');
        const data = await fs.readFile(jokesFilePath, 'utf-8');
        const jokes = data.split('\n\n').flatMap(section => section.split('\n').slice(1));
        if (jokes.length === 0) {
            console.log(colors.brightRed(`[Jokifie] Error: No jokes found.`));
            return null; 
        }
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        return joke;
    } catch (error) {
        console.error(colors.brightRed(`[Jokifie] Error getting jokes: ${error.message}`));
        return null;
    }
}

function parseJokes(data, category) {
    const regex = new RegExp(`${category}:([\\s\\S]*?)(\\n\\n|$)`);
    const match = data.match(regex);
    if (!match) return [];

    const jokes = match[1].trim().split('\n').filter(joke => joke.trim() !== '');
    return jokes;
}

module.exports = { 
    getJoke, 
    getRandomJoke
};
