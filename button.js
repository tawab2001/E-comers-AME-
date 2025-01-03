var cart = [];

var cartCount = 0;

// Link the json file
fetch('categorized_products.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        var productContainer = document.getElementById('product-container');

        products.forEach(function(product) {
            var productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = 
                `<h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>`;
            productContainer.appendChild(productCard);
        });
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
                cartCount++;
                updateCartIcon();
            }
        });
       
        console.log(cart);

}

// Update the count
function updateCartIcon() {
    var cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
}

