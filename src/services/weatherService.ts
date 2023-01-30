import axios from "axios";
import { RequestWeather, Weather } from "../interfaces/types";

const weatherService = async({lat, lon} : RequestWeather): Promise<Weather> => {
    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    const host = import.meta.env.VITE_WEATHER_HOST;
    const url = `${host}?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const { main, sys, name, weather, coord } = await axios.get(url)
        .then(res => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
    
    return {
        name,
        country: sys.country,
        humidity: main.humidity,
        description: weather[0].description,
        coord: {
            lat: coord.lat,
            lon: coord.lon
        }
    };
}

export default weatherService;