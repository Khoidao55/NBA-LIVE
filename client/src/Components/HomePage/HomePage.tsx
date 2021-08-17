import React, { useEffect } from 'react';
import axios from 'axios';
import LiveFeed from '../LiveFeed/LiveFeed';

const HomePage: React.FC = () => {
  return (
    <div>
      <LiveFeed />
    </div>
  )
}

export default HomePage;