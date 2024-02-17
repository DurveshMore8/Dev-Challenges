const author = document.getElementById("author");
const tags = document.getElementById("tags");
const quote = document.getElementById("quote");

const fetchQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      author.innerHTML = data.author;
      quote.innerHTML = `"${data.content}"`;

      while (tags.firstChild) {
        tags.removeChild(tags.firstChild);
      }

      data.tags.forEach((tag) => {
        const element = document.createElement("span");
        element.className = "quote-tags-tag";
        element.innerHTML = tag;
        tags.appendChild(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const copyQuote = async () => {
  let quote_text = quote.innerHTML;
  quote_text = quote_text.slice(1, quote_text.length - 1);
  await navigator.clipboard.writeText(quote_text);
};

fetchQuote();
