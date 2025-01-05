document.getElementById('bigDiv').addEventListener('click', function() {
    document.getElementsByClassName('catogarDiv')[0].scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.shop-icon').addEventListener('click', function() {
    document.querySelector('.cart').style.display = 'block';
    updateCart();
});

// document.getElementById('close-cart').addEventListener('click', function() {
//     document.querySelector('.cart').style.display = 'none';
// });

document.querySelector('.explore').addEventListener('click', function() {
    document.getElementById('explore-content').style.display = 'block';
});

document.getElementById('close-explore').addEventListener('click', function() {
    document.getElementById('explore-content').style.display = 'none';
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let clickCount = 0;

function updateCart() {
    const cartDiv = document.querySelector('.cart');
    cartDiv.innerHTML = '<h1 class="text-center">Shopping Basket</h1>';

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

    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function closeCart() {
    const cartDiv = document.querySelector('.cart');
    cartDiv.style.display = 'none';
    localStorage.removeItem('cart');
    clickCount = 0;
}

function openCart() {
    const cartDiv = document.querySelector('.cart');
    cartDiv.style.display = 'block';
    updateCart();
}

document.querySelector('.shop-icon').addEventListener('click', () => {
    clickCount++;

    if (clickCount >= 2) {
        closeCart();
    }
});

document.querySelector('.shop-icon').addEventListener('dblclick', () => {
    openCart();
});

function addItemToCart(name, price, quantity) {
    cart.push({ name, price, quantity });
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    showUserName();
});

console.log(cart);

document.querySelectorAll('.categorys').forEach(div => {
    div.addEventListener('click', () => {
        const category = div.dataset.category; 
        window.location.href = `products.html?category=${category}`; 
    });
});

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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.explore').addEventListener('click', function () {
        document.getElementById('explore-content').style.display = 'block';
    });
    document.getElementById('close-explore').addEventListener('click', function () {
        document.getElementById('explore-content').style.display = 'none';
    });
});

function redirectToLogin() {
    window.location.href = 'sign_in.html';
}

function showUserName() {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user && user.firstname) {
        document.getElementById('user').textContent = user.firstname;
    }
}

const user = JSON.parse(localStorage.getItem('userData'));
console.log(localStorage);

window.addEventListener('DOMContentLoaded', function () { 
   
    
    if (user) {
        document.getElementById('user').textContent = user.firstname;
        console.log(user);
    }
});