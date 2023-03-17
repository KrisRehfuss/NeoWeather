import React from "react";
import Image from "next/image";
import Sun from '../../public/sun.png'
import LiteClouds from '../../public/cloudy.png'
// import HeavyClouds from '../../public/HeavyClouds.png'
import Rain from '../../public/rainy.png'
// import HeavyRain from '../../public/HeavyRain.png'
import Thunder from '../../public/thunder.png'
import Snow from '../../public/snow.png'

const getWeatherIcon = (weather) => {
  let imageBe;

  if (weather.main === "Clear") {
    imageBe = Sun;
  } else if (weather.main === "Clouds") {
    imageBe = LiteClouds;
  } else if (weather.main === "Rain") {
    imageBe = Rain;
  } else if (weather.main === "Thunderstorm") {
    imageBe = Thunder;
  } else if (weather.main === "Snow") {
    imageBe = Snow;
  } else {
    imageBe = Sun;
  }

  return imageBe;
};

const Weather = ({ data }) => {
  if (!data) {
    return null; // or you can return a default value
  }

  const weatherIcon = getWeatherIcon(data.weather[0]);

  return (
    <div className="relative flex flex-col lg:justify-between justify-evenly lg:w-[500px]  lg:h-full m-12 mt-12 p-4">
      {/* Top */}
      <div className=" rounded-2xl bg-sky-900/40 lg:min-w-[900px] w-96 lg:h-96 lg:mb-2 mb-24 -mt-8 place-self-center relative flex justify-between p-8 pt-6">
        <div className="flex flex-col lg:items-center lg:justify-between ">
          <Image
            className="mb-4 lg:mt-12 "
            // layout='fill'
            // object="cover"
            width="100"
            height="100"
            src={weatherIcon.src}
            alt="/"
          />
          <p className="lg:text-6xl lg:text-left  mt-12 lg:mb-24 text-center text-5xl">
            {data.weather[0].main}
          </p>
        </div>
        <p className="lg:text-8xl text-6xl">
          {data.main.temp.toFixed(0)}&#176;
        </p>
      </div>

      {/* Bottom */}
      <div className="MARK bg-black/60 relative p-8 rounded-md">
        <p className=" text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className=" flex items-center justify-evenly text-center">
          <div>
            <p className="text-xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels Like</p>
          </div>

          <div>
            <div>
              <p className="text-xl">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl">{data.wind.speed.toFixed(0)} MPH</p>
              <p>Winds</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
