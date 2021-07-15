import React, { useEffect } from 'react';
import axios from 'axios';
import LiveFeed from '../LiveFeed/LiveFeed.jsx';

const HomePage = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <LiveFeed />
    </div>
  )
}

export default HomePage;