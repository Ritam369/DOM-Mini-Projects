const buttonRef = document.getElementById("button");
const quoteRef = document.getElementById("quote");
const authorRef = document.getElementById("author");

buttonRef.addEventListener("click", function () {
  quoteRef.innerHTML = "";
  fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      quoteRef.innerHTML = data.data.content;
      authorRef.innerHTML = data.data.author;
    })
    .catch((error) => {
      console.log(error);
    });
});
