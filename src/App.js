
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx'
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx';
import ShopContextProvider from './Context/ShopContext.jsx';
import men_banner from './Components/Assets/banner/men_banner.png'
import women_banner from './Components/Assets/banner/women_banner.png'
import kids_banner from './Components/Assets/banner/kids_banner.png'
import LoginSignup from './pages/loginSignup.jsx'

function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/> 
      {/* <Shop /> */}
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/men' element = {<ShopCategory  banner = {men_banner} category = "men" />}/>
        <Route path = '/women' element = {<ShopCategory banner = {women_banner} category = "women" />}/>
        <Route path = '/kids' element = {<ShopCategory banner = {kids_banner} category = "kids" />}/>
        <Route path = '/product' element = {<Product/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup />}/>
      </Routes>

      <Footer />
      </BrowserRouter>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
