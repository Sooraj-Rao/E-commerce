import Home from "./Main/Pages/Home/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Main/Pages/Shop/Shop";
import Login from "./Main/Pages/Auth/Login/Login";
import SignUp from "./Main/Pages/Auth/SignUp/SignUp";
import Layout from "./Main/Layout";
import ProductInfo from "./Main/Pages/Product/Product_Info";
import Admin from "./Admin/Admin";
import { Toaster } from "react-hot-toast";
import Checkout from "./Main/Pages/Checkout/Checkout";
import { useContext } from "react";
import { MyContext } from "./Main/Context/Context";
import CartItem from "./Main/Pages/Cart/Cart";
import Manage from './Main/Pages/Manage/Manage'
import Instruction from "./Main/Pages/Instruction/Instruction";
import NotFound from './Main/Components/Home/NotFound'

const App = () => {

  const { login, admin } = useContext(MyContext);

  return (
    <div>
      <Toaster
        position='top-center'
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: 'black',
            color: 'white',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }} />
      <div>
        <BrowserRouter>
          <Layout>
            <Routes>
              {
                login && admin &&
                <Route path={import.meta.env.VITE_ADMIN_ROUTE + '/:route'} element={<Admin />} />
              }
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Shop />} />
              <Route path="/view/:param" element={<CartItem />} />
              <Route path="/p/:item" element={<ProductInfo />} />
              <Route path="/auth/Login" element={<Login />} />
              <Route path="/auth/signUp" element={<SignUp />} />
              <Route path="/manage/:param" element={<Manage />} />
              <Route path="/i/:param" element={<Instruction />} />
              <Route path="/checkout/:param" element={login ? <Checkout /> : <Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App