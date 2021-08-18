import React, { useState, useEffect } from 'react';
import { liveOptions } from '../../../../API.js';
import axios from 'axios';

interface GameData {
  status: number,
  filters: [],
  games: [],
  message: string,
  results: number
}
const LiveFeed: React.FC = () => {
  const [data, setData] = useState<GameData[]>([]);

  useEffect(() => {
    const fetchLiveData = async () => {
      let liveData = await axios.get('/getLiveData');
      setData(liveData.data);
    }
    fetchLiveData();
  }, []);

  console.log(data);
  if(data.length !== 0){
    return (
      <div className="livefeed-container">
        <div className="home-team">
          <h1>{data.games[0].hTeam.fullName}</h1>
        </div>
        <div className="away-team">

        </div>
        <h1>Live Feed</h1>
      </div>
    );
  } else {
    return(
    <div>
      Loading...
    </div>
    )
  }
}

export default LiveFeed;