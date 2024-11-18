const cart = document.getElementById("cart");
const btn_product = document.querySelectorAll(".btn");

btn_product.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.dataset.name;
    const productPrice = event.target.dataset.price;
    const list = document.createElement("li");

    list.innerHTML = `${productName} Price : ${productPrice} <button  class="btn btn-danger" data-name="${productName}" data-price="${productPrice}">Delete</button>`;
    list.classList = "list-group-item";

    cart.appendChild(list);

    // Find the "Delete" button inside the newly created list item
    const delButton = list.querySelector("button");
    // Add event listener for deleting the task
    delButton.addEventListener("click", function () {
      list.remove(); // This removes the entire <li> element
    });
  });
});
