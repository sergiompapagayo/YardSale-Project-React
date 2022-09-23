import React, { useState, useContext } from "react";
import AppContext from '@context/AppContext';
import '@styles/Header.scss';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import logo from '@assets/logo.svg';
import shoppingCartIcon from '@assets/shopping_cart_icon.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="yardsale-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__right-group">
          <ul>
            <li>
              <a href="/login" className="login">Log in</a>
            </li>
            <li>
              <a href="#" className="user-email inactive" id="emailText1"></a>
            </li>
          </ul>
          <div
            className="shopping-cart-icon"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCartIcon} alt="Shopping cart icon" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </div>
        </div>
      </nav>
      <aside className="desktopMenu__categories">
        <ul>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Clothes</a>
            </li>
            <li>
                <a href="/">Electronics</a>
            </li>
            <li>
                <a href="/">Furniture</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>
            <li>
                <a href="/">Others</a>
            </li>
        </ul>
      </aside>
      {toggle && <MobileMenu />}
      {toggleOrders && <MyOrder />}
    </>
  );
}

export default Header;
