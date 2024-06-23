# Jokifie

Jokifie is a Node.js module that provides a collection of jokes categorized into various topics. Whether you need a quick laugh or want to integrate humor into your application, jokifie has you covered.

## Installation

You can install Jokifie using npm:

```bash
npm install jokifie
```

## Usage

### Importing the Module

#### CommonJS (Node.js)

```javascript
const { getJoke, getRandomJoke } = require('jokifie');
```

#### ES Module (ESM)

```javascript
import { getJoke, getRandomJoke } from 'jokifie';
```

### Getting a Random Joke

```javascript
const joke = await getRandomJoke();
console.log(joke);
```

### Getting a Joke by Category

```javascript
const joke = await getJoke('Programming');
console.log(joke);
```

### Available Categories

- Animals
- Lawyer
- Doctor
- Teacher
- Technology
- Programming
- Food
- Sports
- Math
- Science
- Office
- Holiday

### Error Handling

If no jokes are found for a category or an error occurs during joke retrieval, appropriate error messages will be logged to the console.

## Contributing

Contributions are welcome! If you'd like to add more jokes, improve the code, or report issues, please visit the [GitHub repository](https://github.com/Gpcodez/Jokifie).

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

## Support

For more detailed help, please mail to gpcodez@gmail.com

## Acknowledgments

jokifie uses the following open-source libraries:

- [colors](https://www.npmjs.com/package/colors) - For colored terminal output.

## About

Jokifie is maintained by [Gpcodez](https://gpcodez.xyz). You can find more of my projects at [my website](https://gpcodez.xyz).