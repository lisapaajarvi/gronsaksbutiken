import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart, toggleCart, isCartOpen } = useContext(CartContext);
  return (
    <div
      style={{
        height: "6rem",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <h1>Grönsaksbutiken</h1>
      <div>
        <p>Kundvagn: {cart.length}</p>
        <button onClick={toggleCart}>
          {isCartOpen ? "Stäng kundvagn" : "Öppna kundvagn"}
        </button>
      </div>
    </div>
  );
}
