import {cart, addToCart} from "../data/cart.js";
import {products} from "../data/products.js";
import {formatCurrency} from "./utils/money.js";


let productsHTML= "";

products.forEach ((product) =>{
  productsHTML += `
  <div class="js-product-container product-container"   data-product-id="15b6fc6f-327a-4ec4-896f-486349e85a3d" data-testid="product-container-15b6fc6f-327a-4ec4-896f-486349e85a3d">

    <div class="product-image-container">
      <img class="js-product-image product-image" src="${product.image}">
    </div>

    <div class="product-name limit-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${formatCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector" data-testid="quantity-selector">
        <option selected="" value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    

    <div class="product-spacer"></div>

    <div class="js-added-to-cart-message added-to-cart-message" data-testid="added-to-cart-message">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="js-add-to-cart-button
      add-to-cart-button button-primary"  data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`

});

const productContainer = document.querySelector(".js-products-grid");
productContainer.innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    
    });

    document.querySelector(".js-cart-quantity")
    .innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart-button")
.forEach ((button) =>{
  button.addEventListener ("click", ()=> {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  });
});






