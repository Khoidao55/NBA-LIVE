import React from 'react';
import './LiveTeam.css';

interface Props {
  teamName: string,
  logo: string,
}

const LiveTeam:React.FC<Props> = ({ teamName, logo }) => {
  return(
    <div className='team-stat'>
      <img src={logo} className='team-logo' />
      <p>{teamName}</p>
    </div>
  )
}

export default LiveTeam;