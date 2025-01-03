document.getElementById('bigDiv').addEventListener('click', function() {
    document.getElementsByClassName('catogarDiv')[0].scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.shop-icon').addEventListener('click', function() {
    document.querySelector('.cart').style.display = 'block';
    updateCart();
});

const cart = [
    {
        name: 'Product 1',
        price: 100.00,
        quantity: 2
    },
    {
        name: 'Product 2',
        price: 50.00,
        quantity: 1
    },
    {
        name: 'Product 3',
        price: 75.00,
        quantity: 1
    }
];

// Function to update the cart details
function updateCart() {
    const cartDiv = document.querySelector('.cart');
    cartDiv.innerHTML = '<h1 class="text-center">Shopping Basket</h1>'; // Clear existing content and add header

    let total = 0;

    cart.forEach((item, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <div class="product-details">
                <h2>${item.name}</h2>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartDiv.appendChild(productDiv);
        total += item.price * item.quantity;
    });

    const totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    cartDiv.appendChild(totalDiv);

    const checkoutButton = document.createElement('button');
    checkoutButton.className = 'btn btn-primary';
    checkoutButton.textContent = 'Checkout';
    cartDiv.appendChild(checkoutButton);
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// ...existing code...

console.log(cart);


