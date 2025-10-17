function Product({ product, addToShoppingCart }) {
  // Presentational card for a single catalog item with add-to-cart action.
  const { name, category, price, description, imageUrl } = product;

  function handleAddToCart() {
    addToShoppingCart(product); // Relay selection to parent cart state.
  }

  return (
    <div className="product">
      <h2 className="product-name">{name}</h2>
      <div className="div-category-price">
        <p className="product-category">Category: {category}</p>
        <p className="product-price">Price: ${price}</p>
      </div>
      <p className="product-description">Description: {description}</p>
      <img className="product-img" src={imageUrl} alt={name} />
      <button className="add-button" onClick={handleAddToCart}>
        Add to the shopping cart
      </button>
    </div>
  );
}

export default Product;
