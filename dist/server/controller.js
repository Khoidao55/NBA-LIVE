"use strict";
const axios = require('axios');
const { liveOptions } = require('../API.js');
const redis = require('redis');
const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT);
client.on('connect', function () {
    console.log('Connected to Redis!');
});
module.exports.getLiveGameData = async (req, res) => {
    try {
        let liveData = await axios.get(liveOptions.url, {
            'headers': liveOptions.headers
        });
        console.log(liveData.data.api);
        client.setex('liveGame', 3600, JSON.stringify(liveData.data.api));
        res.send(liveData.data.api);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
//# sourceMappingURL=controller.js.map