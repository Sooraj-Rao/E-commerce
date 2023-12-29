import Home from "./Main/Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Main/Pages/Shop/Shop";
import Login from "./Main/Pages/Auth/Login/Login";
import SignUp from "./Main/Pages/Auth/SignUp/SignUp";
import Layout from "./Main/Layout";
import Cart from "./Main/Pages/Cart/Cart";
import Product from "./Main/Pages/Product/Product";
import Admin from "./Admin/Admin";
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={import.meta.env.VITE_ADMIN_ROUTE + '/:route'} element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/p/:id" element={<Product />} />
            <Route path="/auth/Login" element={<Login />} />
            <Route path="/auth/signUp" element={<SignUp />} />
          </Routes>
          <div>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App