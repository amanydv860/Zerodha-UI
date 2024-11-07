
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'
import Signup from "./landing_page/signup/Signup"
import About from "./landing_page/about/About"
import Products from "./landing_page/products/Product"
import Pricing from "./landing_page/pricing/Pricing"
import Support from "./landing_page/support/Support"
import Narbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer"
import NotFound from './landing_page/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Narbar/>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/product" element={<Products/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/support" element={<Support/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
)
