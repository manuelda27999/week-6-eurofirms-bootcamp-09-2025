import Product from "./Product";
import products from "../../data/data";

function Products() {
  return (
    <main>
      <h2>This is the Products section</h2>
      {/* {products.map((product) => {
        return <Product key={product.id} {...product} />; // {product.name, }
      })} */}
      <Product
        id={"12345"}
        name={"Secador"}
        price={24.99}
        category={"Electrodomésticos"}
        imageUrl={
          "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDhqMTZ4M2ZrNDl3b2NqendzcW54OXI1ajJrMXNoYmM4MzJqOTQ2cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0IyiGnuML23TZSNy/giphy.gif"
        }
        description={"Secador de pelo"}
      />
    </main>
  );
}

export default Products;
