import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Home = ({setWeatherData}) => {   
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setHours(now.getHours());
            setMinutes(now.getMinutes());
            setSeconds(now.getSeconds());
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className='card  bg-[url("./bg-image.jpg")]  bg-no-repeat bg-cover bg-center h-screen w-full'>
                <div className="card-body">
                    <SearchBar setWeatherData={setWeatherData} redirect={'/weather'}/>
                    <div className="grid grid-cols-12 p-4 gap-4 bg-dark">
                        <div></div>
                        <div className="grid col-span-7 bg-white breakingNewsContainer rounded">
                            <p className="breakingNewsHeading">Hurricane Threat</p>
                            <div className="text-white font-bold font-serif text-xs newsImage bg-[url('./News.jpg')] bg-no-repeat bg-contain">
                            </div>
                        </div>
                        <div></div>
                        <div className="grid col-span-3 rounded">
                            <div className="grid-rows-5 gap-2">
                                <div className="row-span-2">
                                    <div className="grid grid-cols-3 gap-2 p-2">
                                        <div className="hoursElement flex flex-col items-center rounded">
                                            <p className="timerheading">Hours</p>
                                            <p className="timer">{hours}</p>
                                        </div>
                                        <div className="minutesEmelent flex flex-col items-center rounded">
                                            <p className="timerheading">Minutes</p>
                                            <p className="timer">{minutes}</p>
                                        </div>
                                        <div className="secondElement flex flex-col items-center rounded">
                                            <p className="timerheading">Second</p>
                                            <p className="timer">{seconds}</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                {/* <div className="bg-white row-span-2">
                                    News
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* {weatherData ? <p className="heading drop-shadow-lg text-center">Weather Today</p> : <></>} */}
                    {/* <div className="flex flex-row p-3 justify-around">
                            <div className="breakingNewsContainer bg-white rounded">
                                <p className="breakingNewsHeading">Hurricane Threat</p>
                                <div className="text-white font-bold font-serif text-xs newsImage bg-[url('./News.jpg')] bg-no-repeat bg-contain">
                                </div>
                            </div>
                        <div className="flex flex-col">
                            <div className="bg-black">
                                <p>Current Time</p>
                                <p>{date.toLocaleTimeString()}</p>
                            </div>
                            <div>
                                <p>Other News</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Home;
{/* {weatherData ? <div className="p-1">                            
                            <p><b>Location</b></p>
                            <p><b>City: </b>{weatherData.location.name}</p>
                            <p><b>Country:</b> {weatherData.location.country}</p>
                            <p><b>Latitude: </b>{weatherData.location.lat}</p>
                            <p><b>Longitude:</b> {weatherData.location.lon}</p>
                            <p><b>Local Time:</b> {weatherData.location.localtime}</p>
                            <p><b>Timezone:</b> {weatherData.location.tz_id}</p>
                            <h2><b>Current Weather</b></h2>
                            <p><b>Temperature (C):</b> {weatherData.current.temp_c}°C</p>
                            <p><b>Temperature (F):</b> {weatherData.current.temp_f}°F</p>
                            <p><b>Last Updated:</b> {weatherData.current.last_updated}</p>
                        </div> :
                            <div className="p-1">
                                <p className="heading drop-shadow-2xl">Weather Information</p>
                                <p><b>Location</b></p>
                                <p><b>City: </b></p>
                                <p><b>Country:</b> </p>
                                <p><b>Latitude: </b></p>
                                <p><b>Longitude:</b></p>
                                <p><b>Local Time:</b> </p>
                                <p><b>Timezone:</b> </p>

                                <h2><b>Current Weather</b></h2>
                                <p><b>Temperature (C):</b> °C</p>
                                <p><b>Temperature (F):</b> °F</p>
                                <p><b>Last Updated:</b> </p>
                            </div>
                        } */}
{/* <div className="">
                            <img src="./cloudyDay.jpg" className="h-90" alt="weather Image" />
                        </div> */}