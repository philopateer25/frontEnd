let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans.",
    "Your time is limited, so don't waste it living someone else's life.",  
    "If life were predictable it would cease to be life, and be without flavor.",
    "The future belongs to those who believe in the beauty of their dreams.",   
    "It does not matter how slowly you go as long as you do not stop.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",]


let btn = document.getElementById("btn");
let quoteElement = document.getElementById("quote");

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;  
}

btn.addEventListener('click', getRandomQuote);
