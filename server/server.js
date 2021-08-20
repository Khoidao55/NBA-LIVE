const express = require('express');
const axios = require('axios');
const { liveOptions } = require('../API.js');
const bodyParser = require('body-parser');
const redis = require('redis');

const EXPRESS_PORT = 3000;
const REDIS_PORT = 6379;

const app = express();
const client = redis.createClient(REDIS_PORT);


client.on('connect', function() {
  console.log('Connected to Redis!');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/getLiveData' , async (req, res) => {
  let liveData = await axios.get(liveOptions.url, {
    'headers': liveOptions.headers
  });
  //console.log(liveData.data.api);
  res.send(liveData.data.api);
});

app.listen(EXPRESS_PORT, () => {
  console.log("Listening on 3000, the best server");
})

