import { useContext } from "react";
import { mockedProducts } from "./data";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import CartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";

export default function MainContent() {
  const { addToCart, isCartOpen } = useContext(CartContext);
  return (
    <>
      <div style={{ padding: "2rem" }}>
        {mockedProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>
              {product.price} {" kr"}
            </p>
            <Button
              variant="contained"
              endIcon={<CartIcon />}
              onClick={() => addToCart(product)}
            >
              Lägg i kundvagn
            </Button>
          </div>
        ))}
      </div>
      {isCartOpen && <Cart />}
    </>
  );
}
