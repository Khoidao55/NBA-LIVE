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
      <img src={logo} className='team-logo' />
      <h1>{teamName}</h1>
    </div>
  )
}

export default LiveTeam;