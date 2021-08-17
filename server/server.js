const express = require('express');
const axios = require('axios');
const { liveOptions } = require('../API.js');
const bodyParser = require('body-parser');

const app = express();

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

app.listen(3000, () => {
  console.log("Listening on 3000, the best server");
})

