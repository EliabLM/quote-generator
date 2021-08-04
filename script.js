let apiQuotes = [];

// ========== Local quotes ========== //
// function newLocalQuote() {
// 	const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)];
// 	console.log(quote);
// }

// Show new quote
function newQuote() {
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
	const apiUrl = "https://type.fit/api/quotes";
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch Error
		alert(error);
	}
}

// ON load
// newLocalQuote();
getQuotes();
