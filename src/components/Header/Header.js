import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Header() {
    return (
        <div className="header">
          <div className="header-logo">
              <h2>Mercato</h2>
          </div>
          <div className="header-search">
              <input className="header-search-input"/>
              <SearchIcon className="header-search-icon"/>
          </div>
          <div className="header-nav">
              <div className="header-nav-items">Sign in</div>
              <div className="header-nav-items">Orders</div>
              <div className="header-nav-items">
                  <AddShoppingCartIcon/>
                  <span className="header-cart-count">0</span>
              </div>
          </div>

            
        </div>
    )
}
