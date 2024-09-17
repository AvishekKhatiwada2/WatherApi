import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Weather = ({ weatherData, setWeatherData }) => {
    // const [weatherData, setWeatherData] = useState(null);
    const [time, setTime] = useState();
    const [airQuality, setAirQuality] = useState('');

    useEffect(() => {
        if (weatherData) {
            const extractedTime = weatherData.location.localtime.split(" ")[1];
            setTime(extractedTime);
            // console.log(weatherData);
            const airQualityIndex = weatherData.current.air_quality['us-epa-index'];
            if (airQualityIndex == 1)
                setAirQuality('Excellent');
            else if (airQualityIndex == 2)
                setAirQuality('Moderate');
            else if (airQualityIndex == 3)
                setAirQuality('At-risk');
            else if (airQualityIndex == 4)
                setAirQuality('Unhealthy');
            else if (airQualityIndex == 5)
                setAirQuality('Very Unhealthy');
            else
                setAirQuality('Hazardous');
        }
    }, [])
    const hourlyData = weatherData.forecast.forecastday[0].hour;
    const hourlySlicedData = hourlyData.slice(8, 18);

    function convertTo12Hour(time24) {
        let [hours, minutes] = time24.split(":");
        hours = parseInt(hours);
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${hours} ${period}`;
    }
    const convertedData = hourlySlicedData.map((data) => {
        const time24 = data.time.split(" ")[1];
        const time12 = convertTo12Hour(time24);

        return {
            time12
        };
    });
    return (
        <div className="grid grid-cols-5 gap-1 card bg-no-repeat bg-cover bg-center h-screen w-full" style={{ backgroundImage: 'url(./bg-image.jpg)' }}>
            <div className='col-span-4 '>
                <SearchBar setWeatherData={setWeatherData} />
                <div className="current-weather-card px-5 max-w-100 mt-5">
                    <div className="current-temperature-title">
                        <h2>Current Weather of {weatherData.location.name}</h2>
                        <p>{time}</p>
                    </div>
                    <div className="temp-full-details bg-white">
                        <div className="left-div">
                            <div className="left-div-content">
                                <img src={weatherData.current.condition.icon} className="weatherIcon" alt="weatherIcon" />
                                <div className="TemperatureValue">
                                    {weatherData ? <div className="current-temperature">{weatherData.current.temp_c}°C</div> : <></>}
                                    {weatherData ? <p><span className="FeelsLike">Feels Like</span><span className="feelsLikeValue"> {weatherData.current.feelslike_c}°C</span></p> : <></>}
                                </div>
                            </div>
                            <div className="left-div-below-content">
                                <p className="belowText">{weatherData.current.condition.text}</p>
                                <div className="flex flex-row">
                                    <p className="moreDetails">More Details</p>
                                    <svg className="icon-chevron chevron-icon right" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"><path d="M10 .969L9.037 0 5 4.063.963 0 0 .969 5 6z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="right-div">
                            <ul className="p-5">
                                <li className="flex flex-row justify-between">
                                    <span className="ExtraDataText">Air Quality</span>
                                    <span><b>{airQuality}</b></span>
                                </li><hr />
                                <li className="flex flex-row justify-between">
                                    <span className="ExtraDataText">Humidity</span>
                                    <span><b>{weatherData.current.humidity}</b></span>
                                </li><hr />
                                <li className="flex flex-row justify-between">
                                    <span className="ExtraDataText">Wind</span>
                                    <span><b>{weatherData.current.wind_kph}</b></span>
                                </li><hr />
                                <li className="flex flex-row justify-between">
                                    <span className="ExtraDataText">Cloud(%)</span>
                                    <span><b>{weatherData.current.cloud}</b></span>
                                </li><hr />
                                <li className="flex flex-row justify-between">
                                    <span className="ExtraDataText">Atm. Pressure</span>
                                    <span><b>{weatherData.current.pressure_mb}</b></span>
                                </li><hr />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Hourly-weather-card px-5 max-w-100 mt-5 rounded">
                    <div className="hourly-temperature-title bg-white">
                        <h2>Hourly Weather</h2>
                    </div>
                    <div className="bg-white">
                        <div className="hourly-weatherGrid grid grid-cols-10">
                            {hourlySlicedData.map((hour, index) => (
                                <div className="items-center " key={hour.time_epoch}>
                                    <span className="hourlyTime">{convertedData[index].time12}</span>
                                    <img src={hour.condition.icon} alt="icon" />
                                    <span className="hourlyTemprature">{hour.temp_c}°C</span>
                                    <span className="hourlyConditionText">{hour.condition.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">

            </div>
        </div>
    );
}
export default Weather;