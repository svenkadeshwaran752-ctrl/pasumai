let cart = [];


// ================= ADD TO CART =================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    openCart();
}


// ================= UPDATE CART =================

function updateCart() {

    const count = document.getElementById("cartCount");

    const items = document.getElementById("cartItems");

    const totalElement = document.getElementById("cartTotal");

    count.textContent = cart.length;

    if (cart.length === 0) {

        items.innerHTML = `
            <p class="empty-cart">
                Your basket is empty.
            </p>
        `;

        totalElement.textContent = "0";

        return;
    }


    items.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div>
                <strong>${item.name}</strong>
                <br>
                <small>₹${item.price}</small>
            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">
                Remove
            </button>

        `;

        items.appendChild(div);

    });


    totalElement.textContent = total;
}


// ================= REMOVE =================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// ================= OPEN CART =================

function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("active");
}


// ================= CLOSE CART =================

function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("active");
}


// ================= SEARCH =================

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        const name =
            product
            .getAttribute("data-name")
            .toLowerCase();


        if (name.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


// ================= WHATSAPP =================

function orderWhatsApp() {

    if (cart.length === 0) {

        alert("Please add products to your basket.");

        return;
    }


    let message =
        "Hello Pasumai Kaai Kani Angadi!%0A%0A";

    message +=
        "I would like to order:%0A%0A";


    let total = 0;


    cart.forEach(item => {

        message +=
            "• " +
            item.name +
            " - ₹" +
            item.price +
            "%0A";

        total += item.price;

    });


    message +=
        "%0A*Total: ₹" +
        total +
        "*";


    /*
        CHANGE THIS NUMBER
        TO YOUR SHOP'S WHATSAPP NUMBER.

        Example:
        919876543210
    */

    const phone =
        "919XXXXXXXXX";


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        message,
        "_blank"
    );
}


// ================= CART OVERLAY =================

document
    .getElementById("cartOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeCart();

        }

    });