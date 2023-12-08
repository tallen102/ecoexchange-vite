import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import 'boxicons'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="dropdown">
            <button className="dropbtn">Shop</button>
            <div className="dropdown-content">
              <Link to="/category1">Category 1</Link>
              <Link to="/category2">Category 2</Link>
              <Link to="/category3">Category 3</Link>
            </div>
          </div>
        </div>
        
        <div className="logo-center">
          <Link to="/" className="navbar-logo">
            ECO EXCHANGE
          </Link>
        </div>
        
        <div className="nav-right">
          <ul>
            <li><Link to="/login"><i className='bx bx-user'></i></Link></li>
            <li><Link to="/search"><i className='bx bx-search'></i></Link></li>
            <li><Link to="/cart"><i className='bx bx-shopping-bag'></i></Link></li>
            <li><Link to="/wishlist"><i className='bx bx-heart'></i></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
