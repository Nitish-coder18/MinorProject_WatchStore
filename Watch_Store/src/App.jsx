import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbaar/Navbar"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import LoginSingup from "./pages/LoginSignup"
import Cart from "./pages/Cart"

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens"  />} />
          <Route path="/kids" element={<ShopCategory category="kids"  />} />
          <Route path="/product" element={<Product />}/>
          <Route path=":productId" element={<Product />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup/>} />
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
