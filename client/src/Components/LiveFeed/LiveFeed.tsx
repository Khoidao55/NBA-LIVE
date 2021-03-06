import React, { useState, useEffect } from 'react';
import { liveOptions } from '../../../../API.js';
import LiveTeam from '../LiveTeam/LiveTeam';
import { LiveGameData } from '../../types/LiveGameData';
import axios from 'axios';
import './LiveFeed.css';

interface GameData {
  results: LiveGameData[]
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
    const homeTeam = data.games[0].hTeam;
    const awayTeam = data.games[0].vTeam;
    return (
      <div className="livefeed-container">
        <div className="home-team">
          <LiveTeam
          teamName = {homeTeam.fullName}
          logo = {homeTeam.logo}
          />
        </div>
        <h1 className='home-points'>{homeTeam.score.points}</h1>
        <h2>VS</h2>
        <h1 className='away-points'>{awayTeam.score.points}</h1>
        <div className="away-team">
          <LiveTeam
          teamName = {awayTeam.fullName}
          logo = {awayTeam.logo}
          />
        </div>
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