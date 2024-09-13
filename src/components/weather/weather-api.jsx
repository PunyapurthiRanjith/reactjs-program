import axios from "axios";
import { Component } from "react";

class WeatherApi extends Component {
  state = {
    weatherData: [],
  };
  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          this.fetchData(latitude, longitude);
        }
        console.log(position.coords.latitude);
        console.log(position.coords.longitude)
      });
    } else {
      console.error("error")
    }
  };

  fetchData = async (lan,lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=873229bfa3142e94e0ba325058db1d86`
    );
  };

  render() {
    return <></>;
  }
}
export default WeatherApi;
