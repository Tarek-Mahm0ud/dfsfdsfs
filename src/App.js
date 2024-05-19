import Navbar from "./compoenents/Navbar";
import Home from "./compoenents/Home";
import Service from "./compoenents/Services";
import Menu from "./compoenents/Menu";
import { Routes, Route } from 'react-router-dom';
import About from "./compoenents/About";
import Main from "./compoenents/Main";
import Cart from './compoenents/Cart';
import Deyalis from "./compoenents/Deyalis";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="Services" element={<Service/>} />
      <Route path="menu" element={<Menu/>} />
      <Route path="About" element={<About/>} />
      <Route path="Cart" element={<Cart/>} />
      <Route path="/product/:id" element={<Deyalis/>} /> {/* Add this line */}
      </Routes>
    </div>
  );
}

export default App;
