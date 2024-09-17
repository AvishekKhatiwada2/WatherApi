import { useState } from "react";

const ApiFetchCheck = () => {

    const [data, setData] = useState('');

    const getData = () => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=57a743d922a5439b85175923240809&q=London&aqi=yes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.json());
            // if (!res.ok) {
            //     throw Error('could not fetch data');
            // }
            // return res.json();
        })
    }

    const getDataOld = () => {
        fetch('http://api.weatherapi.com/v1/current.json?key=57a743d922a5439b85175923240809&q=london',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.json());
            // if (!res.ok) {
            //     throw Error('could not fetch data');
            // }
            // return res.json();
        })
    }
    return (
        <>
            <div className="content">
                {/* <button className="btn btn-success" onClick={fetchFromApi}>
                    Fetch Data
                </button><br></br> */}
                <button onClick={getData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Data</button>
                <button onClick={getData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Old Data</button>
            </div>
        </>
    );
}
 
export default ApiFetchCheck;