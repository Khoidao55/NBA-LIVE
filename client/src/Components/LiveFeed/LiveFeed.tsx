import React, { useState, useEffect } from 'react';
import { liveOptions } from '../../../../API.js';
import axios from 'axios';

const LiveFeed: React.FC = () => {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    const fetchLiveData = async () => {
      let liveData = await axios.get('/getLiveData');
      setData(liveData.data);
    }
    fetchLiveData();
  }, []);

  console.log(data);

    return (
      <div className="livefeed-container">
        <div className="home-team">
          {/* <h1>{data.games.hTeam.fullName}</h1> */}
        </div>
        <div className="away-team">

        </div>
        <h1>Live Feed</h1>
      </div>
    );

}

export default LiveFeed;