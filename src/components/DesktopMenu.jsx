import React from 'react';
import '@styles/DesktopMenu.scss';

const DesktopMenu = () => {
	return (
    <aside className="DesktopMenu">
      <ul className="DesktopMenu-container">
        <li>
          <a href="#">My orders</a>
        </li>
        <li>
          <a href="#">My account</a>
        </li>
        <li>
          <a href="#" className="sign-out">Sign out</a>
        </li>
      </ul>
    </aside>
	);
}

export default DesktopMenu;
