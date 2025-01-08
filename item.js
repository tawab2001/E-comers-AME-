const cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
const query = urlParams.get('productName')?.toLowerCase();

fetch('categorized_products.json')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById('product-details');
        productContainer.innerHTML = '';

        if (productId) {
            const product = data.find(p => p.id == productId);

            if (product) {
                const productElement = document.createElement('div');
                productElement.classList.add('product-details');

                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Brand: ${product.brand}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <img src="${product.image}" alt="${product.name}">
                    ${product.rating ? `<p>Rating: ${product.rating}</p>` : ''}
                    ${product.color ? `<p>Color: ${product.color}</p>` : ''}
                    ${product.connectivity ? `<p>Connectivity: ${product.connectivity}</p>` : ''}
                    ${product.wireless !== undefined ? `<p>Wireless: ${product.wireless ? 'Yes' : 'No'}</p>` : ''}
                    ${product.compatibility ? `<p>Compatibility: ${product.compatibility}</p>` : ''}
                    ${product.weight ? `<p>Weight: ${product.weight}</p>` : ''}
                    ${product.screen_size ? `<p>Screen Size: ${product.screen_size}</p>` : ''}
                    ${product.storage ? `<p>Storage: ${product.storage}</p>` : ''}
                    ${product.ram ? `<p>RAM: ${product.ram}</p>` : ''}
                    ${product.suction_power ? `<p>Suction Power: ${product.suction_power}</p>` : ''}
                    ${product.battery_life ? `<p>Battery Life: ${product.battery_life}</p>` : ''}
                    ${product.mapping_technology !== undefined ? `<p>Mapping Technology: ${product.mapping_technology ? 'Yes' : 'No'}</p>` : ''}
                    `;
                productContainer.appendChild(productElement);
            } else {
                productContainer.innerHTML = '<p>Product not found.</p>';
            }
        } else if (query) {
            const filteredProducts = data.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            );

            const resultsContainer = document.getElementById('product-details');
            resultsContainer.innerHTML = '';

            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product-details');
                    productElement.innerHTML = `
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p>Brand: ${product.brand}</p>
                        <p>Price: $${product.price.toFixed(2)}</p>
                        <img src="${product.image}" alt="${product.name}">
                        ${product.rating ? `<p>Rating: ${product.rating}</p>` : ''}
                        ${product.color ? `<p>Color: ${product.color}</p>` : ''}
                        ${product.connectivity ? `<p>Connectivity: ${product.connectivity}</p>` : ''}
                        ${product.wireless !== undefined ? `<p>Wireless: ${product.wireless ? 'Yes' : 'No'}</p>` : ''}
                        ${product.compatibility ? `<p>Compatibility: ${product.compatibility}</p>` : ''}
                        ${product.weight ? `<p>Weight: ${product.weight}</p>` : ''}
                        ${product.screen_size ? `<p>Screen Size: ${product.screen_size}</p>` : ''}
                        ${product.storage ? `<p>Storage: ${product.storage}</p>` : ''}
                        ${product.ram ? `<p>RAM: ${product.ram}</p>` : ''}
                        ${product.suction_power ? `<p>Suction Power: ${product.suction_power}</p>` : ''}
                        ${product.battery_life ? `<p>Battery Life: ${product.battery_life}</p>` : ''}
                       
                     ${product.mapping_technology !== undefined ? `<p>Mapping Technology: ${product.mapping_technology ? 'Yes' : 'No'}</p>` : ''}
                    `

                     ;
                    
                    resultsContainer.appendChild(productElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>No products found for your search.</p>';
            }
        }
    })
    .catch(error => {
        console.error('Error loading product:', error);
        const productContainer = document.getElementById('product-details');
        productContainer.innerHTML = '<p>Failed to load product details. Please try again later.</p>';
    });
    document.getElementById('search-input').addEventListener('input', function() {
        const searchInput = document.getElementById('search-input').value.trim();
        if (searchInput.length > 0) {
            this.style.backgroundImage = 'none'; 
        } else {
            this.style.backgroundImage = 'url("pro/search.png")'; 
        }
    });
    function goToPage() {
        
        window.location.href = "index.html";
    }