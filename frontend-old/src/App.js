import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Login from './pages/login';
import Register from "./pages/register";
import AddProduct from "./pages/product/add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<Login />}></Route>
        <Route path="/register"  element={<Register />}></Route>
        <Route path="/product/add"  element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
