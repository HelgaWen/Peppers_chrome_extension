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
const SLApiKey3dot1 = 'e8771cbd86e047388f44b69f50bd4d2b';

app.get('/api/sl/siteid/:station', function (req, res) {
  const station = req.params.station;
  fetch(`https://api.sl.se/api2/typeahead.json?key=${SLApiKey}&searchstring=${station}&stationsonly=true&maxresults=1`, {
  })
    .then(result => result.json())
    .then(data => res.send(data));
}
);

app.get('/api/sl/travelA2B/:origin/:destination', function (req, res) {
  const originId = req.params.origin;
  const destinationId = req.params.destination;

  fetch(`http://api.sl.se/api2/TravelplannerV3_1/trip.json?key=${SLApiKey3dot1}&originId=${originId}&destId=${destinationId}&searchForArrival=0&lang=en`)
    .then(result => result.json())
    .then(parseData => {
      console.log(parseData)
      let arr = [];
      console.log('HEYYY: ', parseData.Trip[0].LegList.Leg[0].Origin);
      for (let i = 0; i < parseData.Trip.length; i++) {
        arr.push(parseData.Trip[i].LegList.Leg[0].Origin.time)
      }
      console.log('The next three departures ', arr);
      return arr
    })
    .then(data => res.send(data))
  }
);

app.listen(8000, () => console.log('App listening on port 8000!'));