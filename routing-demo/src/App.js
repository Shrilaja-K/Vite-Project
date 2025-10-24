import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Ordersummary from './Ordersummary';
import Home from './Home';
import About from './About';
import Nomatch from './Nomatch';
import Products from './Products';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order-summary' element={<Ordersummary/>} />
      <Route path='*' element={<Nomatch/>} />
      <Route path='Products' element={<Products/>} />
    </Routes>
    </>
  );
}

export default App;
