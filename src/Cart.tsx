import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
    });
    return total;
  };

  return (
    <div style={{ position: "fixed", top: "6rem", right: "2rem" }}>
      <h3>Kundvagn:</h3>
      {cart.map((product, index) => (
        <div key={index}>
          <p>
            {product.quantity} st {product.name} á {product.price} kr
          </p>
          <button onClick={() => removeFromCart(product.id)}>Ta bort</button>
        </div>
      ))}
      <h4>Totalpris: {totalPrice()} kr</h4>
    </div>
  );
}
