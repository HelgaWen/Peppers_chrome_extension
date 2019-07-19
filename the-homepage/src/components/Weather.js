import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { WeatherImage, WeatherCardWrapper } from "../styles/weatherStyles";
import cloud from '../styles/images/cloud.png';
import haze from '../styles/images/haze.png';
import lightningcloud from '../styles/images/lightningcloud.png';
import partlycloud from '../styles/images/partlycloudy.png';
import raincloud from '../styles/images/raincloud.png';
import shiningSun from '../styles/images/shining-sun-mini.png';
import snowcloud from '../styles/images/snowcloud.png';

const openWeatherKey = '6b7cf999b78778926922d8ba6376858f';

class Weather extends Component {

  state = {
    city: '',
    temp: '',
    currentWeather: snowcloud
  }
  componentDidMount() {
    this.getPosition();
  }
  getPosition = () => {
    navigator.geolocation.getCurrentPosition(this.showWeather)
  }
  showWeather = (position) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${openWeatherKey}`)
      .then(result => result.json())
      .then(result => {
        let temp = this.kelvinToCelsius(result.main.temp);
        let city = result.name;
        let currentWeatherFromApi = result.weather[0].description;
        switch (currentWeatherFromApi) {
          case 'clear sky': this.setState({ currentWeather: shiningSun });
            break;
          default: this.setState({ currentWeather: raincloud })
        }
        this.setState({ city: city, temp: temp })
        console.log(temp, city, result);
      });
  }

  kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  }
  render() {
    return (
      <ContentCard>
        <WeatherCardWrapper>
          <WeatherImage weather={cloud} />
          <h2>{this.state.city}</h2>
          <h2>{this.state.temp}&deg;C</h2>
        </WeatherCardWrapper>
      </ContentCard>
    );
  }
}

export default Weather;


