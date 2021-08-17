import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NBALOGO from '../../../images/nba-logo.png';
import Button from '../Button/Button';
import './Banner.css';

interface Props {

}

const Banner: React.FC<Props> = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={NBALOGO} className='nba-logo'/>
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
            <Link to='/players' className="nav-links" onClick={closeMobileMenu}>
              Players
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/news' className="nav-links" onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/donate' className="nav-links-mobile" onClick={closeMobileMenu}>
              DONATE
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>DONATE</Button>}
      </div>
    </nav>
    </>
  );
}

export default Banner;