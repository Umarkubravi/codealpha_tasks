const quotes = [
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        quote: "Small steps every day lead to big results.",
        author: "Unknown"
    },
    {
        quote: "Don't stop until you're proud.",
        author: "Unknown"
    },
    {
        quote: "Difficult roads often lead to beautiful destinations.",
        author: "Unknown"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    },
    {
        quote: "Action is the foundational key to success.",
        author: "Pablo Picasso"
    },
    {
        quote: "Never give up. Great things take time.",
        author: "Unknown"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
function showRandomQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = `"${quotes[randomIndex].quote}"`;

    author.textContent = `— ${quotes[randomIndex].author}`;

}

// Show a random quote when the page loads
showRandomQuote();

// Generate a new random quote when button is clicked
newQuoteBtn.addEventListener("click", showRandomQuote);