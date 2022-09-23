import React from 'react';
import '@styles/MobileMenu.scss';

const MobileMenu = () => {
	return (
    <aside className="MobileMenu">
      <p>Categories</p>
      <ul className="MobileMenu__categories">
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Clothes</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#">Furnitures</a>
        </li>
        <li>
          <a href="#">Toys</a>
        </li>
        <li>
          <a href="#">Others</a>
        </li>
      </ul>
      <div className="MobileMenu__user">
        <ul>
          <li>
            <a href="#">My orders</a>
          </li>
          <li>
            <a href="#">My account</a>
          </li>
          <li>
            <a href="#" className="email" id="emailText2"></a>
          </li>
          <li>
            <a href="#">Sign out</a>
          </li>
        </ul>
      </div>
      <div className="MobileMenu__login">
        <ul>
          <li>
            <a href="/">Log in</a>
          </li>
        </ul>
      </div>
    </aside>
	);
}

export default MobileMenu;
