import React from "react";
import Image from "next/image";
import Sun from '../../public/sun.png'
import LiteClouds from '../../public/cloud.png'
import HeavyClouds from '../../public/HeavyClouds.png'
import HeavyRain from '../../public/HeavyRain.png'
import Thunder from '../../public/thunder.png'
import Snow from '../../public/snow.png'

const Weather = ({ data }) => {
  if (!data) {
    return null; // or you can return a default value
  }

    const getWeatherIcon = (iconCode) => {
      let imageBe;

      if (iconCode === "01d" || iconCode === "01n") {
        imageBe = Sun
      } else if (iconCode === "02d" || iconCode === "02n") {
        imageBe = LiteClouds
      } else if (iconCode === "03d" || iconCode === "03n") {
        imageBe = HeavyClouds
      } else if (iconCode === "09d" || iconCode === "09n") {
        imageBe = HeavyRain
      } else if (iconCode === "10d" || iconCode === "10n") {
        imageBe = HeavyRain
      } else if (iconCode === "11d" || iconCode === "11n") {
        imageBe = Thunder
      } else if (iconCode === "13d" || iconCode === "13n") {
        imageBe = Snow
      } else {
        imageBe = Sun
      }

      return imageBe;
    };

  return (
    <div className=" relative flex flex-col justify-between lg:w-[500px] w-full h-full m-auto mt-12 p-4">
      {/* Top */}
      <div className=" rounded-2xl bg-sky-900/60 relative flex justify-between p-4 pt-6">
        <div className="flex flex-col items-center">
          <Image
            className="mb-4 "
            // layout='fill'
            // object="cover"
            width="50"
            height="50"
            src={getWeatherIcon(data.weather[0].icon).src}
            alt="/"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="lg:text-8xl text-6xl">
          {data.main.temp.toFixed(0)}&#176;
        </p>
      </div>

      {/* Bottom */}
      <div className=" bg-black/60 relative p-8 rounded-md">
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
