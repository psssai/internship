let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart!`);
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.productName} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function processPayment(event) {
    event.preventDefault();
    // Simulate payment processing
    alert('Payment processed successfully!');
    window.location.href = 'confirmation.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});
