import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Ordersummary from './Ordersummary';
import Home from './Home';
import About from './About';
import Nomatch from './Nomatch';
import Products from './Products';
import Featuredproducts from './Featuredproducts';
import Newproduct from './Newproduct';
import Users from './Users';
import Admin from './Admin';
import Usrdetails from './Usrdetails';
const Lazyabout=React.lazy(()=>import('./About'))

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={
        <React.Suspense fallback='Loading'>
          <Lazyabout />
          </React.Suspense>} />
      <Route path='order-summary' element={<Ordersummary/>} />
      <Route path='products' element={<Products/>} >
        <Route index element={<Featuredproducts/>} />
        <Route path='featured' element={<Featuredproducts />} />
        <Route path='new' element={<Newproduct />} />
      </Route>
      <Route path='users' element={<Users/>} >
        <Route path=':userId' element={<Usrdetails />} />
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='*' element={<Nomatch/>} />
      
    </Routes>
    </>
  );
}

export default App;
