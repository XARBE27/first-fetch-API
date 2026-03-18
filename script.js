const itemContainer = document.getElementById("itemContainer");

let quotesData = [];

async function fetchQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");

    const data = await response.json();

    quotesData = data.quotes;
    drawItems(quotesData);
  } catch (error) {
    setTimeout(() => {
      const errorMessage = document.querySelector(".error-message");
      errorMessage.style.display = "block";
    }, 2000);
  }
}

function drawItems(quotes) {
  itemContainer.innerHTML = "";

  quotes.forEach((quote) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("item-box");

    const quoteText = document.createElement("p");
    quoteText.textContent = `"${quote.quote}"`;
    quoteText.classList.add("item-info");

    const quoteAuthor = document.createElement("h3");
    quoteAuthor.textContent = `— ${quote.author}`;
    quoteAuthor.classList.add("item-title");

    itemBox.append(quoteText, quoteAuthor);
    itemContainer.appendChild(itemBox);
  });
}

fetchQuotes();
