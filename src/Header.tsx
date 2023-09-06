import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart, toggleCart, isCartOpen } = useContext(CartContext);
  return (
    <header
      style={{
        height: "6rem",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
      <nav>
        <ul style={{ display: "flex", listStyleType: "none", gap: "1rem" }}>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
