import { useState } from "react";
import products from "../../data/data.js";
import Product from "./Product.jsx";
import ShoppingCart from "./Shopping-cart.jsx";

function Products() {
  // Local state keeps the cart contents and visibility in sync across components.
  const [shoppingCart, setShoppingCart] = useState([]); //Add inside of this array some items to simulate a pre-filled cart
  const [showCart, setShowCart] = useState(false);

  function addToShoppingCart(product) {
    setShoppingCart((currentCart) => [...currentCart, product]);
  }

  function onDeleteProduct(index) {
    const newShoppingCart = [...shoppingCart];
    newShoppingCart.splice(index, 1);
    setShoppingCart(newShoppingCart);
  }

  // Render catalog list alongside a floating trigger and cart overlay.
  return (
    <main>
      <h2>This is the Products section</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToShoppingCart={addToShoppingCart}
          />
        );
      })}
      <button
        onClick={() => setShowCart(true)}
        className="button-shopping-cart"
      >
        {"🛒 " + shoppingCart.length}
      </button>
      <ShoppingCart
        productsShoppingCart={shoppingCart}
        showCart={showCart}
        onHideCart={() => setShowCart(false)}
        onDeleteProduct={onDeleteProduct}
      />
    </main>
  );
}

export default Products;
