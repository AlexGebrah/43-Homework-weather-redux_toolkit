import {useSelector} from "react-redux";

const Weather = () => {
    const message = useSelector(state => state.message);
    const weather = useSelector(state => state.weather);

    return (
        <div className={'infoWeath'}>
            {message ? (
                <p>{message}</p>
            ) : (
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}°C</p>
                    <p>Pressure: {weather.pressure} hPa</p>
                    {weather.sunset && <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>}
                </>
            )}
        </div>
    )
}

export default Weather;