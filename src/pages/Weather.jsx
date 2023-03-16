import React from "react";
import Image from "next/image";
import Sun from '../../public/sun.png'
import LiteClouds from '../../public/cloud.png'
import HeavyClouds from '../../public/HeavyClouds.png'
import Rain from '../../public/rainy.png'
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
        imageBe = Rain
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
    <div className="relative flex flex-col justify-between lg:w-[500px] w-96 h-full m-auto mt-12 p-4">
      {/* Top */}
      <div className="MARK flex flex-col rounded-2xl -z-20 bg-sky-900/40 lg:min-w-[900px] lg:h-[900px] w-96  lg:-mt-36 place-self-center relative justify-between p-4 pt-6">
        <div className="flex flex-col lg:justify-between items-center">
          <Image
            className="mb-4  lg:mt-12 "
            // layout='fill'
            // object="cover"
            width="100"
            height="100"
            src={getWeatherIcon(data.weather[0].icon).src}
            alt="/"
          />
          <p className="lg:text-6xl mt-12 lg:mb-24 text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="lg:text-8xl text-6xl">
          {data.main.temp.toFixed(0)}&#176;
        </p>      {/* Bottom */}
      <div className="MARK -z-10 bg-black/60 relative p-8 rounded-md">
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


    </div>
  );
};

export default Weather;
