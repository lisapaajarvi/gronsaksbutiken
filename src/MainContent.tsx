import { useContext } from "react";
import { mockedProducts } from "./data";
import { CartContext } from "./CartContext";

export default function MainContent() {
  const { addToCart } = useContext(CartContext);
  return (
    <div style={{ padding: "2rem" }}>
      {mockedProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>
            {product.price} {" kr"}
          </p>
          <button onClick={() => addToCart(product)}>Lägg i kundvagn</button>
        </div>
      ))}
    </div>
  );
}
