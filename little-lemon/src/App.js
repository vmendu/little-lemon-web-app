import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';
import './index.css';
import Menu from './pages/Menu';






function App() {
    return (
        <BrowserRouter scrollBehavior="auto" >
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/reservations' element={<Reservations />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
