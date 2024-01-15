import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './Components/AddToCart/AddToCart';
import AddressForm from './Components/AddressForm/AddressForm';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import CartSubtotal from './Components/Cart/CartSubtotal';
import Header from './Components/Layout/Headers/Header';
import ProductList from './Components/Product/ProductList';
import SingleProduct from './Components/Product/SingleProduct';


function App() {
  return (
   <>
   <Header />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />
      <Route path="/addToCart" element={<AddToCart />} />
      
      
    </Routes>
   </BrowserRouter>
    
    {/* <SignUp /> */}
    {/* <Header /> */}
    {/* <AddToCart /> */}
    {/* <ProductList /> */}
    {/* <SingleProduct /> */}
    {/* <CartSubtotal/> */}
    {/* <AddressForm /> */}
   </>
  );
}

export default App;
