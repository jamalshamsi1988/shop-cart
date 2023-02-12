import { Route ,Routes , Navigate} from "react-router-dom";

//components
import ProductsContexProvider from "./contex/ProductsContexProvider";
import Store from "./components/Store";
import ProductsDetail from './components/ProductsDetail';
import CartContextProvider from "./contex/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import CartShop from "./components/CartShop";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";


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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path='/notfound' element={<NotFound/>} />
          {/* <Route path="/*" element={<Navigate to="/notfound"/>} /> */}
          <Route path="/github" element={<AboutUs />} />
         </Routes>
         <Footer/>
      </CartContextProvider>
  </ProductsContexProvider>
  
  );
}

export default App;
