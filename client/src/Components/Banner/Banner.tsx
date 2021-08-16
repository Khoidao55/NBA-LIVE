import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

export const Banner: React.FC<Props> = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NBALOGO
        </Link>
      </div>
    </nav>
    </>
  );
}