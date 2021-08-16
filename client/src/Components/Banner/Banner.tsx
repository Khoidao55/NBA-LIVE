import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NBALOGO from '../../../images/nba-logo.png';
import './Banner.css';

interface Props {

}

const Banner: React.FC<Props> = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={NBALOGO} className='logo'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu disabled'}>
          <li className='nav-item'>
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              Player Stats
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Banner;