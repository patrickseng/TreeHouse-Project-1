//List of Quotes
var quotes = [
  {quote: 'Waste no more time arguing what a good man should be. Be One.', source: 'Marcus Aurelius'},
  {quote: 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.', source: 'Marcus Aurelius'},
  {quote: 'If a man knows not which port he sails, no wind is favorable.', source: 'Seneca'},
  {quote: 'Life is very short and anxious for those who forget the past, neglect the present, and fear the future.', source: 'Seneca'},
  {quote: 'First say to yourself what you would be; and then do what you have to do.', source: 'Epictetus'},
  {quote: 'What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.', source: 'Viktor Frankl'},
  {quote: 'A room without books is like a body without a soul.', source: 'Marcus Cicero'},
  {quote: 'Be yourself; everyone else is already taken.', source: 'Oscar Wilde'},
];

// Retrieve Random Quote
function getRandomQuote(array) {
  var RandomNumber = Math.floor((Math.random() * array.length));
  return array[RandomNumber];
};

// Printing these wonderful Quotes
function printQuote(){
  var RandomQ = getRandomQuote(quotes);
  var message ='';
    message += '<p class="quote">' + RandomQ.quote + '</p>';
    message += '<p class="source">' + RandomQ.source + '</p>';
  document.getElementById("quote-box").innerHTML = message;
};

//Auto Refresh
setInterval(printQuote, 10000)

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
