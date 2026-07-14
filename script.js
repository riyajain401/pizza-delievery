let cart = [];
let totalItems = 0;

// Add Item
function addToCart(name, price) {
    cart.push({ name, price });

    totalItems++;
    document.getElementById("cartCount").innerText = totalItems;

    renderCart();

    // Success message
    showMessage(`${name} added to cart 🍕`);
}

// Render Cart
function renderCart() {
    const cartDiv = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
        document.getElementById("total").innerText = "0";
        checkoutBtn.disabled = true;
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {
        html += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button class="btn" onclick="removeItem(${index})">
                ❌
            </button>
        </div>
        `;

        total += item.price;
    });

    cartDiv.innerHTML = html;
    document.getElementById("total").innerText = total;
    checkoutBtn.disabled = false;
}

// Remove Item
function removeItem(index) {

    showMessage(cart[index].name + " removed!");

    cart.splice(index, 1);
    totalItems--;

    document.getElementById("cartCount").innerText = totalItems;

    renderCart();
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order Placed Successfully!\n\nThank you for ordering from Pizza Delight.");

    cart = [];
    totalItems = 0;

    document.getElementById("cartCount").innerText = 0;

    renderCart();
}

// Search Pizza
function searchPizza() {

    let input = document.getElementById("search").value.toLowerCase();

    let pizzas = document.querySelectorAll(".pizza");

    pizzas.forEach((pizza) => {

        let name = pizza.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            pizza.style.display = "block";
        } else {
            pizza.style.display = "none";
        }

    });
}

// Toast Message
function showMessage(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
