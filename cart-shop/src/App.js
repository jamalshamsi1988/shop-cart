import { Route ,Routes , Navigate} from "react-router-dom";

import ProductsContexProvider from "./contex/ProductsContexProvider";
import Store from "./components/Store";
import ProductsDetail from './components/ProductsDetail';
import CartContextProvider from "./contex/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import CartShop from "./components/CartShop";

function App() {
  return (

  <ProductsContexProvider>
    <CartContextProvider>
      <Navbar />
        <Routes>
          <Route path="/products" element={<Store/>} />
          <Route path="/products/:id" element={<ProductsDetail/>} />
          <Route path="/cart" element={<CartShop />} />
          <Route path="/*" element={<Navigate to="/products"/>} />
          
         </Routes>
      </CartContextProvider>
  </ProductsContexProvider>
  
  );
}

export default App;
