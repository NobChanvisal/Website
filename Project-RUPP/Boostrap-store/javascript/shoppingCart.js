document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const subTotalElement = document.getElementById("sub-total");
  const discountAmountElement = document.getElementById("discount-amount");
  const disPercentElement = document.getElementById("disPercent");
  const totalAmountElement = document.getElementById("total-amount");
  const deliveryFee = 5; // Fixed delivery fee
  var discountPercentage = 0; // Fixed discount
  let cartItems = JSON.parse(localStorage.getItem("carts")) || [];

  // Render Cart Items
  function renderCart() {
    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<tr><td colspan='4'>Your cart is empty.</td></tr>";
      updateSummary();
      return;
    }

    let cartHtml = "";
    let subTotal = 0;

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      subTotal += itemTotal;

      cartHtml += `
        <tr class="d-md-table-row d-none border-bottom border-dark-subtle">
          <td>
            <div class="d-flex">
              <img src="${item.image}" alt="${item.name}" class="me-3 img-thumbnail"style=" width:100%; max-width: 150px;">
              <div class=" pt-1">
                <h6 class="mb-0">${item.name}</h6>
                <p style="font-size:13px;" class="text-capitalize text-light-emphasis">${item.color}</p>
              </div>
            </div>
          </td>
          <td>
            <div style="max-width: 100px;" class="input-group d-flex justify-content-center px-2 border border-secondary rounded-pill me-auto">
              <button class="btn border-0 btn-sm quantity-decrease" data-id="${item.id}">
                -
              </button>
              <input
                type="text"
                class="form-control text-center border-0 quantity-input"
                value="${item.quantity}"
                data-id="${item.id}"
                style="max-width: 50px;"
                readonly
              />
              <button class="btn border-0 btn-sm quantity-increase" data-id="${item.id}">
                +
              </button>
            </div>
          </td>
          <td>$${(itemTotal/100).toFixed(2)}</td>
          <td>
            <a href="" class=" link-danger link-offset-2 link-underline-opacity-25 btn-remove pb-2" data-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
              </svg>
            </a>
          </td>
        </tr>
        <tr>
            <div class=" row d-md-none border-bottom border-dark-subtle">
              <div class="col">
                <img class=" img-thumbnail" class="me-3 img-thumbnail"style=" width:100%; max-width: 150px;" src="${item.image}" alt=""/>
              </div>
              <div class="col">
                  <div class="cart-name">${item.name}</div>
                  <span>$${(itemTotal/100).toFixed(2)}</span>
                  <div style="max-width: 90px;" class="input-group mt-2 d-flex justify-content-center border border-secondary rounded-pill me-auto">
                      <button class="p-0 btn border-0 btn-sm quantity-decrease" data-id="${item.id}">
                        -
                      </button>
                      <input
                        type="text"
                        class="form-control p-0 text-center border-0 quantity-input"
                        value="${item.quantity}"
                        data-id="${item.id}"
                        style="max-width: 50px;"
                        readonly
                      />
                      <button class="p-0 btn border-0 btn-sm quantity-increase" data-id="${item.id}">
                        +
                      </button>
                  </div>
              </div>
              <div class="col">
                    
                    <div class="mb-2 h-100 d-flex align-items-end justify-content-end">
                      <a href="" class=" link-danger link-offset-2 link-underline-opacity-25 btn-remove pb-2" data-id="${item.id}">
                        remove
                      </a>
                    </div>
              </div>
            </div>
        </tr>
      `;
    });

    cartContainer.innerHTML = cartHtml;
    updateSummary(subTotal);
    attachEventListeners();
  }
  document.getElementById("apply-discount").addEventListener("click", () => {
    const dis = document.getElementById("txtDis").value;
    if(dis === "Nomoney"){
      alert("Discount apply !!!");
      discountPercentage = 10;
    }
    else{
      alert("Sorry We don't have Coupon code !!");
      discountPercentage = 0;
    }
    renderCart();
  });

  function updateSummary(subTotal = 0) {
    const discountAmount = (subTotal * discountPercentage) / 100;
    const totalAmount = (subTotal - discountAmount + deliveryFee)/100;

    subTotalElement.textContent = `${(subTotal/100).toFixed(2)} USD`;
    if(discountPercentage > 0){
      disPercentElement.textContent = `(`+`${discountPercentage}%)`;
    }
    else{
      disPercentElement.textContent = "";
    }
    discountAmountElement.textContent = `-${(discountAmount/100).toFixed(2)} USD`;
    totalAmountElement.textContent = `${(totalAmount).toFixed(2)} USD`;
  }


  function attachEventListeners() {

    document.querySelectorAll(".quantity-increase").forEach((button) => {
      button.addEventListener("click", (e) => {
        const itemId = e.target.dataset.id;
        const item = cartItems.find((item) => item.id === itemId);
        if (item) item.quantity++;
        console.log(itemId,"-",item.quantity);
        localStorage.setItem("carts", JSON.stringify(cartItems)); // Update localStorage
        renderCart();
      });
    });

    document.querySelectorAll(".quantity-decrease").forEach((button) => {
      button.addEventListener("click", (e) => {
        const itemId = e.target.dataset.id;
        const item = cartItems.find((item) => item.id === itemId);
        if (item && item.quantity > 1) item.quantity--;
        console.log(itemId,"-",item.quantity);
        localStorage.setItem("carts", JSON.stringify(cartItems)); // Update localStorage
        renderCart();
      });
    });

    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.dataset.id;
        cartItems = cartItems.filter((item) => item.id != productId);
        localStorage.setItem("carts", JSON.stringify(cartItems)); // Update localStorage
        renderCart();
      });
    });
  }
  renderCart();


  const paypalButtonContainer = document.getElementById("paypal-button-container");

  // Initialize PayPal button
  paypal.Buttons({
    createOrder: (data, actions) => {
      const totalAmount = parseFloat(document.getElementById("total-amount").textContent.replace(" USD", ""));

      // Create the order with PayPal
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: totalAmount.toFixed(2) // Total cart amount
          }
        }]
      });
    },
    onApprove: (data, actions) => {
      // Capture the payment
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}!`);
        // Clear the cart after payment
        localStorage.removeItem("carts");
        cartItems = [];
        renderCart();
      });
    },
    onError: (err) => {
      console.error("PayPal Checkout Error:", err);
      alert("Something went wrong during the payment process.");
    }
  }).render(paypalButtonContainer);
});
