import axios from "axios";
import { Component } from "react";
import './weatherApi.css';

class WeatherApi extends Component {
  state = {
    weatherData: null,
    error: null,
    backgroundClass: "clear", 
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude && longitude) {
            this.fetchData(latitude, longitude);
          }
        },
        (error) => {
          this.setState({ error: "Unable to retrieve location." });
        }
      );
    } else {
      this.setState({ error: "Geolocation is not supported by this browser." });
    }
  };

  fetchData = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=873229bfa3142e94e0ba325058db1d86&units=metric`
      );
      console.log(data)
      
      const weatherCondition = data.weather[0].main.toLowerCase();
      this.setBackgroundClass(weatherCondition);

      this.setState({ weatherData: data });
    } catch (error) {
      this.setState({ error: "Error fetching weather data." });
    }
  };

  setBackgroundClass = (weatherCondition) => {
    let backgroundClass = "clear";

    if (weatherCondition.includes("cloud")) {
      backgroundClass = "cloudy";
    } else if (weatherCondition.includes("rain")) {
      backgroundClass = "rainy";
    } else if (weatherCondition.includes("snow")) {
      backgroundClass = "snowy";
    } else if (weatherCondition.includes("thunderstorm")) {
      backgroundClass = "thunderstorm";
    } else if (weatherCondition.includes("clear")) {
      backgroundClass = "clear";
    }

    this.setState({ backgroundClass });
  };

  render() {
    const { weatherData, error, backgroundClass } = this.state;

    return (
      
      <>
      <div className="main">
      <h1 >Fetching Weather details through the Weather API</h1>
      <div className={`weather-container ${backgroundClass}`}>
        {error ? (
          <p>{error}</p>
        ) : weatherData ? (
          <div className="weather-card">
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      </div>
      </>
    );
  }
}

export default WeatherApi;
