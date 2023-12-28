import Home from "./Main/Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Main/Pages/Shop/Shop";
import Login from "./Main/Pages/Auth/Login/Login";
import SignUp from "./Main/Pages/Auth/SignUp/SignUp";
import Layout from "./Main/Layout";
import Cart from "./Main/Pages/Cart/Cart";
import Product from "./Main/Pages/Product/Product";
import Admin from "./Admin/Admin";
import Toaster from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <Toaster
        position='top-right'
      />
      {/* <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/> */}

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
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App