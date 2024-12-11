import {api_key, base_url} from "../../utils/constants.js";
import {putWeather} from "../weather/weatherSlice.js";
import {putMessage} from "../message/messageSlice.js";

export const fetchWeather = (city) =>  async (dispatch)=> {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch weather data");
        }

        dispatch(putWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: new Date(data.sys.sunset * 1000),
        }));
        dispatch(putMessage(''));
    } catch (error) {
        console.error(error);
        dispatch(putMessage('Enter correct city name'));
    }
};

