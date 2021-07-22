import React, { useEffect } from 'react';
import axios from 'axios';
import LiveFeed from '../LiveFeed/LiveFeed';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <LiveFeed />
    </div>
  )
}

export default HomePage;