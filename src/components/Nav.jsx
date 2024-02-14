import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
    <header>
      <img src="star.svg" alt="" />

      <div className="newMenu">
        <h4><NavLink to="/"><span>00 </span>HOME</NavLink></h4>
        <h4><NavLink to="/destinasyon"><span>01 </span>DESTINATION</NavLink></h4>
        <h4><NavLink to="/ekip"><span>02 </span>CREW</NavLink></h4>
        <h4><NavLink to="/teknoloji"><span>03 </span>TECHNOLOGY</NavLink></h4>
      </div>
    </header>

      <img className="logo" src="star.svg" alt="" />

      <button className='side' onClick={toggleMenu}>
        <img src={menu ? "/closemenu.svg" : "/menu.svg"} alt="Menu" />
      </button>
      <nav className={menu ? 'menu-open' : ''}>
        {menu &&
          <ul>
            <button className='bar' onClick={toggleMenu}>
            <img src={menu ? "/closemenu.svg" : "/menu.svg"} alt="Menu" /></button>
            <li><NavLink to="/" onClick={toggleMenu}><span>00 </span>HOME</NavLink></li>
            <li><NavLink to="/destinasyon" onClick={toggleMenu}><span>01 </span>DESTINATION</NavLink></li>
            <li><NavLink to="/ekip" onClick={toggleMenu}><span>02 </span>CREW</NavLink></li>
            <li><NavLink to="/teknoloji" onClick={toggleMenu}><span>03 </span>TECHNOLOGY</NavLink></li>
          </ul>
        }
      </nav>
    </>
  );
}
