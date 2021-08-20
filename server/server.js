const express = require('express');
const axios = require('axios');
const { liveOptions } = require('../API.js');
const bodyParser = require('body-parser');
const redis = require('redis');
const { getLiveGameData } = require('./controller.js');

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

//caching middleware
function cache(req, res, next) {
  client.get('liveGame', (err, data) => {
    if(err) throw err;

    if(data !== null) {
      res.send(data);
    } else {
      next();
    }
  })
}

app.get('/getLiveData', cache, getLiveGameData);

app.listen(EXPRESS_PORT, () => {
  console.log("Listening on 3000, the best server");
})

