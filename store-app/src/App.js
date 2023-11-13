import {React , useEffect, useState}  from "react"; 
import { Route, Routes ,Navigate } from "react-router-dom"; 
import jwt_decode from "jwt-decode";

//? Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
//! Pages
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Everything from "./pages/Everything.jsx";
import Groceries from "./pages/Groceries.jsx";
import Juice from "./pages/Juice.jsx";
import Login from "./pages/Login.jsx"; 
import Basket from "./pages/Basket.jsx"; 
import ProductDetails from "./pages/ProductDetails.jsx"; 
import SearchProducts from "./pages/SearchProducts.jsx";
import PaymentForm from "./pages/PaymentForm.jsx"; 
import Register from "./pages/Register.jsx";


function App() { 
  const [username,setUsername]=useState(null);
  useEffect(()=>{
    const token=sessionStorage.getItem("token"); 
    if(token){
      let decoded = jwt_decode(token);
      setUsername(decoded.sub);
    }
    
  },[username]);  

  return (
    <div className="App">
      <Header />
      <main>  
        <Routes>
          <Route path="/login"  element={ username ? <Navigate to="/home"/> :<Login setUser={setUsername}/>   }/>
          <Route path="/register" element={<Register/> } />
          <Route path="/" element ={<Navigate to="/home"/>} />
          <Route path="/product-detail/:id" element={<ProductDetails/> } />
          <Route path="/searchProducts" element={<SearchProducts/> } />
          <Route path="/home" element={<Home/>}/>
          <Route path="/Everything" element={<Everything />}/>
          <Route path="/Groceries" element={<Groceries />}/>
          <Route path="/Juice" element={<Juice />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
        </Routes> 
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
