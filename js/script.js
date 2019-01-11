/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var quotes = [
  {quote: 'Waste no more time arguing what a good man should be. Be One.', source: 'Marcus Aurelius'},
  {quote: 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.', source: 'Marcus Aurelius'},
  {quote: 'If a man knows not which port he sails, no wind is favorable.', source: 'Seneca'},
  {quote: 'Life is very short and anxious for those who forget the past, neglect the present, and fear the future.', source: 'Seneca'},
  {quote: 'First say to yourself what you would be; and then do what you have to do.', source: 'Epictetus'},
  {quote: 'What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.', source: 'Viktor Frankl'},
];
console.log(quotes[5]);


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
