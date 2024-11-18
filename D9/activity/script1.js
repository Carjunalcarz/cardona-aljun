const productContainer = document.getElementById('productContainer');

// Fetch product data from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products in Bootstrap cards
function displayProducts(products) {
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text text-truncate" style="max-height: 3.6em; overflow: hidden;">${product.description}</p>
                        <p class="fw-bold mt-auto">$${product.price}</p>
                        <button class="btn btn-primary mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Fetch and display products on page load
fetchProducts();
