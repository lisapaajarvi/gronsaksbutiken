import { useContext } from "react";
import Cart from "./Cart";
import Header from "./Header";
import MainContent from "./MainContent";
import { CartContext } from "./CartContext";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isCartOpen && <Cart />}
    </>
  );
}

export default App;
