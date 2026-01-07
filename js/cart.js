// ========================================
// SHOPPING CART FUNCTIONALITY
// With localStorage persistence
// ========================================

let cart = JSON.parse(localStorage.getItem('element9Cart')) || [];

// Initialize cart on page load
function initCart() {
    updateCartDisplay();
}

// Add item to cart
function addToCart(name, price, imageSrc) {
    const item = cart.find(i => i.name === name);
    
    if (item) {
        item.quantity++;
    } else {
        cart.push({ 
            name, 
            price: parseFloat(price), 
            imageSrc, 
            quantity: 1 
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification(`${name} added to cart!`);
    
    // Show cart
    const cartContainer = document.getElementById('cart');
    if (cartContainer) {
        cartContainer.style.display = 'block';
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    if (!cartItems || !cartTotal || !cartCount) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}">
            <div style="flex: 1;">
                <strong>${item.name}</strong><br>
                <span>$${item.price.toFixed(2)} × ${item.quantity}</span>
            </div>
            <button onclick="removeFromCart('${item.name}')" style="background: #dc3545; padding: 0.5rem;">
                <i class='bx bx-trash'></i>
            </button>
        `;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Remove item from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCartDisplay();
    
    if (cart.length === 0) {
        const cartContainer = document.getElementById('cart');
        if (cartContainer) {
            cartContainer.style.display = 'none';
        }
    }
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartDisplay();
        
        const cartContainer = document.getElementById('cart');
        if (cartContainer) {
            cartContainer.style.display = 'none';
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('element9Cart', JSON.stringify(cart));
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Proceeding to checkout...\nTotal: $${total.toFixed(2)}\n\nThis feature will be available soon!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class='bx bx-check'></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initCart);
