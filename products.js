"use strict";

let cart = [];

// Function to display products
function displayProducts(filteredProducts) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-md-4 mb-4';
    productDiv.innerHTML = `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            Price: $${product.price.toFixed(2)}<br>
            Available: ${product.maxQuanity} ${product.unitOfMeasurement}
          </p>
          <button class="btn btn-primary" ${product.maxQuanity === 0 ? 'disabled' : ''} onclick="addToCart('${product.name}')">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(productDiv);
  });
}

// Function to filter products based on selected type
function filterProducts() {
  const selectedType = document.getElementById('sort-select').value;
  if (selectedType === 'all') {
    displayProducts(modelCandyData);
  } else {
    const filteredProducts = modelCandyData.filter(product => product.type === selectedType);
    displayProducts(filteredProducts);
  }
}

// Function to add products to cart
function addToCart(productName) {
  const product = modelCandyData.find(p => p.name === productName);
  if (product && product.maxQuanity > 0) {
    product.maxQuanity -= 1; // Decrease the quantity
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
    filterProducts(); // Re-render the product list to update the available quantities
  } else {
    alert(`Sorry, ${product.name} is out of stock.`);
  }
}

// Wait until the DOM is fully loaded before displaying products
document.addEventListener('DOMContentLoaded', () => {
  displayProducts(modelCandyData);
});
