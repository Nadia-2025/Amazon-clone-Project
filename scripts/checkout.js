import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {cart} from "../data/cart.js"
//import "../data/cart.class.js";

let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;

});

document.querySelector(".js-return-to-home-link")
.innerHTML = `${cartQuantity} items`;

renderOrderSummary();
renderPaymentSummary();