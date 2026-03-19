const buttonRef = document.getElementById("button");
const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");
const productRating = document.getElementById("product-rating");
const productImage = document.getElementById("product-image");

buttonRef.addEventListener("click", function () {
  productName.innerHTML = "";
  productDescription.innerHTML = "";
  productPrice.innerHTML = "";
  productRating.innerHTML = "";
  productImage.src = "";
  fetch("https://api.freeapi.app/api/v1/public/randomproducts/product/random", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      productName.innerHTML = data.data.title;
      productDescription.innerHTML = data.data.description;
      productPrice.innerHTML = `$${data.data.price.toFixed(2)}`;
      productRating.innerHTML = data.data.rating;
      productImage.src = data.data.thumbnail;
    })
    .catch((error) => {
      console.log(error);
    });
});
