// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// Configaration
const app = {};
app.config = {
    timeBitweenQuotes: 2000,
};

// Function thtat print a random code
app.printAQuote = function printAQuote() {
    // Get all quotes
    const allQuotes = quotesLibrary.getAllQuotes();

    // Get the length of all quotes
    const numberOfQuotes = allQuotes.length;

    // Get a random number bitween 1 and numbber of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at the potition of the array
    const selectedQuotes = allQuotes[randomNumber - 1];
    console.log(selectedQuotes);
};

app.indefinteLoop = function indefinteLoop() {
    setInterval(() => {
        app.printAQuote();
    }, app.config.timeBitweenQuotes);
};
app.indefinteLoop();
