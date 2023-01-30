// Dependencies
const fs = require('fs');

// Creating the object scafolding;
const quotes = {};

// Get all the quotes and return to the user
quotes.getAllQuotes = function getAllQuotes() {
    const fileContent = fs.readFileSync(`${__dirname}/quotes.txt`);
    const arrayOfQuotes = fileContent.toString().split(/\r?\n/);
    return arrayOfQuotes;
};

module.exports = quotes;
