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
          //points = {}
          />
          <h1>{homeTeam.score.points}</h1>
        </div>
        <h2>VS</h2>
        <div className="away-team">
          <h1>{awayTeam.score.points}</h1>
          <LiveTeam
          teamName = {awayTeam.fullName}
          logo = {awayTeam.logo}
          //points = {awayTeam.score.points}
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