import React from 'react';

interface Props {
  teamName: string,
  logo: string,
  points: string
}
const LiveTeam:React.FC<Props> = ({ teamName, logo, points }) => {
  return(
    <div>
      <h1>{teamName}</h1>
      <img src={logo} />
      <p>{points}</p>
    </div>
  )
}

export default LiveTeam;