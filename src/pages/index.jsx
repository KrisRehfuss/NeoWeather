import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
import Weather from "./Weather";
import Spinner from "./Spinner";
import Beach from "../../public/Beach.jpg";
// import Axis from "./Axis";
import Banner from "./Banner";
import Header from "./Header";
import Top from "./Top";
import SearchBar from "./SearchBar";
import Skills from "./Skills";
import Footer from "./Footer";
import JS from "../../public/JS.png";
import TS from "../../public/TS.png";
import Tailwind from "../../public/tail.png";
import Git from "../../public/git.png";
import React from "../../public/react.png";
import OpenAI from "../../public/openai.png";
import Next from "../../public/next-js.svg";
import Video from "./Video";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  // API Endpoint + Key
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;


// Search Function
  const fetchWeather = (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if(loading) {

  }

  return (
    <>
      <Head>
        <title>Kris Dashboard </title>
        <meta name="description" content="Kris Dash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/engine.png" />
      </Head>

      <main>
        <Nav />
        {/* <Banner /> */}

        {/* Wrapper Start */}
        <div className="MARK -z-50 FlexCenterCol mt-4 font-pop w-screen h-fit">
          <Image
            src={Beach}
            layout="fill"
            // className='opacity-90'
            object='cover'
            alt="#"
          />

          {/* Header */}
          <Header style="Header rounded-md p-4 ClearDrop xl:mt-24  lg:mt-32" />

          {/* Search Bar */}
          <div className="z-20 mt-32  w-screen p-4 FlexCenter">
            <form onSubmit={fetchWeather} className=" FlexCenter lg:w-2/4  Round BoxFit">
              <input
              onChange={(e) => setCity(e.target.value)}
                className=" text-white text-md font-light ml-16 ClearDrop lg:w-2/4 w-3/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 px-4"
                type="text"
                placeholder='Search city'
              />
              <BiSearch
              onClick={fetchWeather}
              size={32}
              className="p-2 mx-4 mb-2 cursor-pointer rounded-full bg-Redd" />
            </form>
          </div>
            {/* Fetch Data Button */}

            
          {/* Caption */}

          {weather.main && <Weather data={weather} />}

        </div>
      </main>
    </>
  );
}
