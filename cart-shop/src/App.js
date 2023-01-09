import { Route ,Routes , Navigate} from "react-router-dom";

import ProductsContexProvider from "./contex/ProductsContexProvider";
import Store from "./components/Store";
import ProductsDetail from './components/ProductsDetail';


function App() {
  return (

  <ProductsContexProvider>
 <Routes>
  <Route path="/store" element={<Store/>} />
  <Route path="/productsdetail" element={<ProductsDetail/>} />
 </Routes>

  </ProductsContexProvider>
  
  );
}

export default App;
