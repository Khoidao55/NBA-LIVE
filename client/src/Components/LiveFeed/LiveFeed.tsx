import React, { useEffect } from 'react';
import { liveOptions } from '../../../../API.js';
import axios from 'axios';

const LiveFeed: React.FC = () => {
  // useEffect(() => {
  //   axios.request(liveOptions).then(function (response) {
  //     console.log(response.data.api);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // })

  return (
    <div>
      <h1>Live Feed</h1>
    </div>
  )
}

export default LiveFeed;