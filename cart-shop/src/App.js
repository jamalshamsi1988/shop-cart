import { Route ,Routes , Navigate} from "react-router-dom";

import ProductsContexProvider from "./contex/ProductsContexProvider";
import Store from "./components/Store";
import ProductsDetail from './components/ProductsDetail';
import CartContextProvider from "./contex/CartContextProvider";

function App() {
  return (

  <ProductsContexProvider>
    <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store/>} />
          <Route path="/products/:id" element={<ProductsDetail/>} />
          <Route path="/*" element={<Navigate to="/products"/>} />
         </Routes>
      </CartContextProvider>
  </ProductsContexProvider>
  
  );
}

export default App;
