import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { WeatherImage, WeatherCardWrapper } from "../styles/weatherStyles";
import { WeatherSpinner } from "../styles/spinner";
import scatteredNbrokencloud from "../styles/images/weather/scatteredNbrokencloud.png";
import mist from "../styles/images/weather/mist.png";
import thunderstorm from "../styles/images/weather/thunderstorm.png";
import fewclouds from "../styles/images/weather/fewclouds.png";
import showerrainNrain from "../styles/images/weather/showerrainNrain.png";
import clearsky from "../styles/images/weather/clearsky.png";
import snow from "../styles/images/weather/snow.png";

const openWeatherKey = "6b7cf999b78778926922d8ba6376858f";

class Weather extends Component {
  state = {
    city: "",
    temp: "",
    currentWeather: scatteredNbrokencloud,
    haveWeather: false
  };
  componentDidMount() {
    this.getPosition();
  }
  getPosition = () => {
    navigator.geolocation.getCurrentPosition(this.showWeather);
  };
  showWeather = position => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
      }&lon=${position.coords.longitude}&appid=${openWeatherKey}`
    )
      .then(result => result.json())
      .then(result => {
        let temp = this.kelvinToCelsius(result.main.temp);
        let city = result.name;
        let currentWeatherFromApi = result.weather[0].description;
        setTimeout(() => {
          switch (currentWeatherFromApi) {
            case "clear sky":
              this.setState({ currentWeather: clearsky });
              break;
            case "few clouds":
              this.setState({ currentWeather: fewclouds });
              break;
            case "scattered clouds":
              this.setState({ currentWeather: scatteredNbrokencloud });
              break;
            case "broken clouds":
              this.setState({ currentWeather: scatteredNbrokencloud });
              break;
            case "shower rain":
              this.setState({ currentWeather: showerrainNrain });
              break;
            case "rain":
              this.setState({ currentWeather: showerrainNrain });
              break;
            case "thunderstorm":
              this.setState({ currentWeather: thunderstorm });
              break;
            case "snow":
              this.setState({ currentWeather: snow });
              break;
            case "mist":
              this.setState({ currentWeather: mist });
              break;
            default:
              this.setState({ haveWeather: false });
          }
          this.setState({ city: city, temp: temp, haveWeather: true });
        }, 250);
      });
  };

  kelvinToCelsius = kelvin => {
    return Math.round(kelvin - 273.15);
  };
  render() {
    switch (this.state.haveWeather) {
      case true:
        return (
          <ContentCard cssPosition={this.props.position} isHidden={this.props.hidden}>
            <WeatherCardWrapper>
              <WeatherImage weather={this.state.currentWeather} />
              <h2>{this.state.city}</h2>
              <h2>{this.state.temp}&deg;C</h2>
            </WeatherCardWrapper>
          </ContentCard>
        );
      default:
        return (
          <ContentCard noborder cssPosition={this.props.position}>
            <WeatherSpinner />
          </ContentCard>
        );
    }
  }
}

export default Weather;
