import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
import Weather from "./Weather";
import Spinner from "./Spinner";
import Beach from "../../public/Beach.jpg";
import Clouds from "../../public/Clouds.jpg";
import Header from "./Header";
import SunPaper from '../../public/SunPaper.jpg'
import LiteCloudPaper from '../../public/Overcast.jpg'
import RainPaper from '../../public/RainPaper.jpg'
import ThunderPaper from '../../public/ThunderPaper.jpg'
import SnowPaper from '../../public/SnowPaper.jpg'

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataloaded, setDataloaded] = useState(false);

  // const [bgImage, setBgImage] = useState(Beach);

  // const getBackground = (weather) => {
  //   let imageBe;

  //   if (weather.main === "Clear") {
  //     imageBe = SunPaper;
  //   } else if (weather.main === "Clouds") {
  //     imageBe = LiteCloudPaper;
  //   } else if (weather.main === "Rain") {
  //     imageBe = RainPaper;
  //   } else if (weather.main === "Thunderstorm") {
  //     imageBe = ThunderPaper;
  //   } else if (weather.main === "Snow") {
  //     imageBe = SnowPaper;
  //   } else {
  //     imageBe = SunPaper;
  //   }

  //   return imageBe;
  // };

  const fetchWeather = (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        // console.log(response.data);
        // const imageBe = getBackground(response.data.weather[0]);
        // setBgImage(imageBe);
        setDataLoaded(true); // set state to true once data is loaded
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setCity("");
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Head>
          <title> TheSunsArc </title>
          <meta name="description" content="Kris Dash" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/sun.png" />
        </Head>

        <main>
          {/* Wrapper Start */}
          <div className="relative z-40 FlexCenterCol font-pop w-screen h-screen">
            <Nav />
            <Image
              src={Beach}
              layout="fill"
              className="-z-50 Smoother ease-linear  opacity-70"
              object="cover"
              alt="#"
            />

            {/* Header */}
            {dataloaded && (<Header style="z-30 Header rounded-md p-4 mt-6 xl:mt-12" />)}
            {weather.main && <Weather data={weather} />}

            {/* Search Bar */}
            <div className="z-20 lg:mt-12 mt-16  w-screen p-4 FlexCenter">
              <form
                onSubmit={fetchWeather}
                className=" FlexCenter lg:w-2/4  Round BoxFit"
              >
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className=" text-white text-md font-light ml-16 ClearDrop lg:w-2/4 w-3/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 px-4"
                  type="text"
                  placeholder="Search city"
                />
                <BiSearch
                  onClick={fetchWeather}
                  size={32}
                  className="p-2 mx-4 mb-2 cursor-pointer rounded-full bg-Redd"
                />
              </form>
            </div>
            {/* Fetch Data Button */}

            {/* Caption */}
          </div>
        </main>
      </>
    );
  }
}
