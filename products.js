var cart = [];
var cartCount = 0;

// Link the JSON file
fetch('categorized_products.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');

        const filteredProducts = category ? products.filter(product => product.category === category) : products;
        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = ''; 

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(function(product) {
                var productElement = document.createElement('div');
                productElement.classList.add('product-item'); 
                productElement.innerHTML = `
                    <div class="child-div">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p>Brand: ${product.brand}</p>
                        <p>Price: $${product.price.toFixed(2)}</p>
                    </div>
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                
                productElement.addEventListener('click', (event) => {
                    if (!event.target.closest('button')) { 
                        window.location.href = `items.html?productId=${product.id}`;
                    }
                });

                productsContainer.appendChild(productElement);
            });
        } else {
            productsContainer.innerHTML = `<p>No products available for this category.</p>`;
        }
    })
    .catch(function(err) {
        console.log("Error loading products:", err);
    });

// Add to Cart function
function addToCart(productId) {
    fetch('categorized_products.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            var product = products.find(function(p) {
                return p.id === productId;
            });
            if (product) {
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart)); 
                cartCount++;
                updateCartIcon();
            }
        });
}

// Update the count
function updateCartIcon() {
    var cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
}

function redirectToCart() {
    window.location.href = 'index.html';
}

// Search Functionality
document.getElementById('search-input').addEventListener('input', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput.length > 0) {
        this.style.backgroundImage = 'none'; 
    } else {
        this.style.backgroundImage = 'url("pro/search.png")'; 
    }
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('search-input').value.trim();
        const name = searchInput; 
        if (name) {
            window.location.href = `items.html?productName=${encodeURIComponent(name)}`;
        } else {
            alert('Please enter a search term.');
        }
    }
});

window.addEventListener('load', () => {
    const image = document.querySelector('#product-details img');
    if (image) {
        image.style.animation = 'slideInFromBottom 1s ease-out';
    }
});
