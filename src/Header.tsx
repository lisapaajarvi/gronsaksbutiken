import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  return (
    <div
      style={{
        height: "4rem",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <h1>Grönsaksbutiken</h1>
      <p>Kundvagn: {cart.length}</p>
    </div>
  );
}
