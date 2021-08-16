import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NBALOGO from '../../../images/nba-logo.png';
import './Banner.css';

interface Props {

}

const Banner: React.FC<Props> = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={NBALOGO} className="logo"/>
        </Link>
        <div className="menu-icon">
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
    </nav>
    </>
  );
}

export default Banner;