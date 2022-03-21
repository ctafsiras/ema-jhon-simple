import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="#">Home</a>
                    <a href="./shop">Shoping</a>
                    <a href="./orders">Orders</a>
                    <a href="./inventory">Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;