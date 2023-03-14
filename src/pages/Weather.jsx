import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-full m-auto mt-12 p-4">
      {/* Top */}
      <div className="rounded-2xl bg-black/60 relative flex justify-between p-4 pt-6">
        <div className="flex flex-col items-center">
          <Image
            className=""
            // layout='fill'
            // object="cover"
            width="100"
            height="100"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
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
