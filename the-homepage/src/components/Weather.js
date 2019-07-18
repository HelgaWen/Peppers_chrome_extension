import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { WeatherImage } from "../styles/weatherStyles";
const openWeatherKey = '6b7cf999b78778926922d8ba6376858f';


class Weather extends Component {

  state = {
    city: '',
    temp: ''
  }
  componentDidMount() {
    this.getPosition();
  }
  getPosition = () => {
    navigator.geolocation.getCurrentPosition(this.showWeather)
  }
  showWeather= (position) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${openWeatherKey}`)
   .then(result => result.json())
   .then(result => {
    let temp = this.kelvinToCelsius(result.main.temp);
    let city = result.name;
    this.setState({city: city, temp: temp})
     console.log(temp, city, result);
    });
  }
  
  kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  }
  render() {
    return (
  <ContentCard>
    <div>
      <WeatherImage clear />
        <h2>{this.state.city}</h2>
        <h2>{this.state.temp}&deg;C</h2>
    </div>
  </ContentCard>
    );
  }
}

export default Weather;


