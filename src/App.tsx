import { useContext } from "react";
import Cart from "./Cart";
import Header from "./Header";
import MainContent from "./MainContent";
import { CartContext } from "./CartContext";

function App() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <Header />
      <MainContent />
      {isCartOpen && <Cart />}
    </>
  );
}

export default App;
