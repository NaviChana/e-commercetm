import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './pages/Store';
import CartProvider from './CartContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';




function App() {
  return (
    <CartProvider>
      <Container>
      <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
    
  );
}

export default App;
