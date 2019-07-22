const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const SLApiKey = '222e319bd06249f39ef7ad7319123f56';

app.get('/api/sl/siteid/:station', function (req, res) {
    const station = req.params.station;
    fetch(`https://api.sl.se/api2/typeahead.json?key=${SLApiKey}&searchstring=${station}&stationsonly=true&maxresults=1`, {
    })
      .then(result => result.json())
      .then(data => res.send(data));
    }
);

app.listen(8000, () => console.log('App listening on port 8000!'));