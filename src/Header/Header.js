import React from 'react';
import logo from '../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className = "logo">
            <img src={logo} alt=""/>
        <nav>
            <div className="nav-bar">
            <a href="/shop">Shop</a>
            <a href="/order-review">Order Review</a>
            <a href="/manage-inventory-here">Manage Inventory</a>
            </div>
        </nav>
        </div>
       
    );
};

export default Header;