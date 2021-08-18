import React from 'react';

interface Props {
  teamName: string,
  logo: string
}
const LiveTeam:React.FC<Props> = ({ teamName, logo }) => {
  return(
    <div>
      <h1>{teamName}</h1>
      <img src={logo} />
    </div>
  )
}

export default LiveTeam;