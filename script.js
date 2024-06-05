document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const purchaseButton = document.getElementById('purchase');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const beatCard = button.closest('.beat-card');
            const id = beatCard.dataset.id;
            const title = beatCard.dataset.title;
            const price = parseFloat(beatCard.dataset.price);

            addItemToCart({ id, title, price });
        });
    });

    purchaseButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert('Thank you for your purchase!');
        cartItems.length = 0; // Clear cart
        updateCart();
    });

    function addItemToCart(item) {
        cartItems.push(item);
        updateCart();
    }

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ksh{item.title} - Ksh${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Initial load to display cart items if any
    updateCart();
});
