console.log("connected!");

let quoteArray = ['"All our dreams can come true, if we have the courage to pursue them."',
'"Do not limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."',
'"The secret of getting ahead is getting started."',
'"It is hard to beat a person who never gives up."'];

let authorArray = ['— Walt Disney', '— Mary Kay Ash', '— Mark Twain', '— Babe Ruth'];

let button = document.getElementById('quoteButton');
let quote = document.getElementById('inspirationalQuote');
let author = document.getElementById('author');


function randomGenerator() {
    return Math.floor(Math.random() * quoteArray.length);
}

function quoteSelector(num) {
    return quoteArray[num];
}

function authorSelector(num) {
    return authorArray[num];
}

function showQuote() {
    quote.innerHTML = quoteSelector(randomGenerator());
    author.innerHTML = authorSelector(randomGenerator());
    button.innerHTML = "Show another quote";
    button.style.cursor = "default";
}

button.addEventListener('click', showQuote);