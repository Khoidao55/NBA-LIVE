import React from 'react';

interface Props {
  teamName: string
}
const LiveTeam:React.FC<Props> = ({ teamName }) => {
  return(
    <div>
      <h1>{teamName}</h1>
    </div>
  )
}

export default LiveTeam;