function ShoppingCart({
  productsShoppingCart,
  showCart,
  onHideCart,
  onDeleteProduct,
}) {
  // Overlay drawer that lists cart items with lightweight quantity management.
  function handleHideCart() {
    onHideCart();
  }

  function handleDeleteProduct(index) {
    onDeleteProduct(index);
  }

  // Aggregate total on each render; cart is small so memoization is unnecessary.
  const totalPrice = productsShoppingCart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className={`shopping-cart ${showCart ? "" : "none"}`}>
      {/* The class "none" makes invisible the full component */}
      <div className="main-section">
        <button
          aria-label="Close shopping cart"
          onClick={handleHideCart}
          className="return-button"
        >
          ❌
        </button>
        <h3>Shopping Cart</h3>
        <div className="cart-content">
          {productsShoppingCart.length === 0 ? (
            <p className="empty-cart">Your shopping cart is empty</p>
          ) : (
            <ul className="cart-items">
              {productsShoppingCart.map((product, index) => (
                <li
                  key={`${product.id}-${index}`}
                  className="product-shopping-cart"
                >
                  <img
                    className="cart-item-image"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{product.name}</span>
                    <span className="cart-item-category">
                      Category: {product.category}
                    </span>
                    <p className="cart-item-description">
                      {product.description}
                    </p>
                  </div>
                  <div className="div-price-delete">
                    <span className="cart-item-price">${product.price}</span>
                    <button
                      onClick={() => handleDeleteProduct(index)}
                      className="delete-button"
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="total-price">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
