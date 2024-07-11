import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Success from './components/success';
import MenuBar from './components/menubar';
import './App.css';

const App = () => {
    return (
        <Router>
            <MenuBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/success" element={ <Success /> } />
            </Routes>
        </Router>
    );
};

export default App;