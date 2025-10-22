function Product({ id, name, price, description, category, imageUrl }) {
  return (
    <div key={id} className="product">
      <h3 className="product-name">{name}</h3>
      <div className="div-category-price">
        <p className="product-category">Category: {category}</p>
        <p className="product-price">Price: ${price}</p>
      </div>
      <p className="product-description">Description: {description}</p>
      <img className="product-img" src={imageUrl} alt={description} />
    </div>
  );
}

export default Product;
