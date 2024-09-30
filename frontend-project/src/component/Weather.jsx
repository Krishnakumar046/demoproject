import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function Weather() {

    const [city, setCity] = useState("Chennai");
    const [cityValue, setCityValue] = useState("chennai");


    const serach = async () => {
        const url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9e3d6399e1a571bcbbc60e3fac96d85`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCityValue(data);
    }

    useEffect(() => {

        serach();

    }, []);
    const temperatureInCelsius = cityValue?.main ? (cityValue.main.temp - 273.15).toFixed(2) : null;

    const cloudImage = () => {
        if (cityValue?.weather && cityValue.weather.length > 0) {
            if (cityValue?.weather[0].icon === "01d" || cityValue?.weather[0].icon === "01n" || cityValue?.weather[0].icon === "02d" || cityValue?.weather[0].icon === "02n") {
                return <span class='fw-medium fs-2'><i class="bi bi-cloud-sun me-2 fs-1"></i>sun</span>
            } else if (cityValue?.weather[0].icon === "03d" || cityValue?.weather[0].icon === "03n" || cityValue?.weather[0].icon === "04d" || cityValue?.weather[0].icon === "04n") {
                return <span class='fw-medium fs-2'><i class="bi bi-cloud me-2 fs-1"></i>cloud</span>
            } else if (cityValue?.weather[0].icon === "09d" || cityValue?.weather[0].icon === "09n" || cityValue?.weather[0].icon === "10d" || cityValue?.weather[0].icon === "10n") {
                return <span class='fw-medium fs-2'><i class="bi bi-cloud-drizzle  me-2 fs-1"></i>drizzle</span>
            } else if (cityValue?.weather[0].icon === "11d" || cityValue?.weather[0].icon === "11n") {
                return <span class='fw-medium fs-2'><i class="bi bi-cloud-lightning-rain  me-2 fs-1"></i>lightning</span>
            } else if (cityValue?.weather[0].icon === "13d" || cityValue?.weather[0].icon === "13n") {
                return <span class='fw-medium fs-2'> <i class="bi bi-cloud-snow  me-2 fs-1"></i>snow</span>
            } else {
                <span class='fw-medium fs-2'> <i class="bi bi-cloud-fog2"></i></span>
            }

        } else {
            return <span class='fw-medium fs-2'><i class="bi bi-question-circle"></i></span>;
        }
    }

    return (
        <div class='container-fluid'>
            <h1>Weather App</h1>
            <p class='container lh-lg'>In this Weather app I have the writted the simple code of showing the weather report through fetch the data from the api by Asynchoronus function and we provide the values to the Input tag and then i have use the useState and useEffect hooks in this weather app .Where the useState which is used to provide the initial value and useEffect is use for initial rendering of the value which provided in the useState.And in the documentation we have seen that Celcius,Location,Humidity and Windspeed</p>
            <div>
                <div class="container col-md-4 design colour text-white mt-5">
                    <h1 class="display-4 text-center text-white" >Weather App</h1>
                    <div class="d-flex flex-row flex-wrap justify-content-center mt-3">
                        <input class="form-control col-md-2 rounded-pill " style={{ width: "300px" }} value={city} placeholder='enter the city' onChange={(e) => setCity(e.target.value)} />
                        <button class="btn btn-success rounded-pill col-md-2" onClick={serach}>Search</button>
                    </div>
                    <div class="container rounded  text-white mb-3 text-centerd-flex flex-column  flex-wrap justify-content-center" style={{ height: "200px" }}>
                        <div class="container text-center pt-4">
                            <h5 class="fw-bold ">{cloudImage()}</h5>
                            <h6 class="fw-medium fs-2 ">{temperatureInCelsius ? `${temperatureInCelsius} °C` : "Temperature not available"}</h6>
                            <h6 class="fw-medium  fs-2"><i class="bi bi-geo-alt  me-2 fs-2"></i>{cityValue ? cityValue.name : 'City not available'}</h6>
                        </div>
                    </div>

                    <div class="container d-flex flex-row flex-wrap justify-content-between">
                        <h5 class="text-white fw-medium"><i class="bi bi-thermometer-sun text-white me-2 fs-2"></i>{cityValue ? `${cityValue.main?.humidity} Humidity` : "Humidity not find"}</h5>
                        <h5 class="text-white fw-medium"><i class="bi bi-wind  me-2 fs-2"></i>{cityValue ? `${cityValue.wind?.speed}Speed` : "Wind speed"}</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}
