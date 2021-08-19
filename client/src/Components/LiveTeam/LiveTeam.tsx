import React from 'react';
import './LiveTeam.css';

interface Props {
  teamName: string,
  logo: string,
  points: string
}
const LiveTeam:React.FC<Props> = ({ teamName, logo, points }) => {
  return(
    <div className='team-stat'>
      <h1>{teamName}</h1>
      <img src={logo} className='team-logo' />
      <p>{points}</p>
    </div>
  )
}

export default LiveTeam;