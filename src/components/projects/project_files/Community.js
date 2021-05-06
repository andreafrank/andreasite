import React from 'react';

const Community = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3 " style={{ color: 'white' }}>
      <h2 className="font-bold text-xl">React weather app</h2>
      <br />
      <div>
        <a
          className="hover:text-yellow-300"
          href="https://github.com/andreafrank/weather"
          target="_blank"
        >
            Github source code
        </a>
        <br />
        <br />
        ReactJS app to geolocate the user, return city, and display the current weather. The app also displays an unsplash image that uses the current weather condition as a search term. The app will auto-update every 10 minutes.
        <br />
        <br />
        Used promises, async/await, and axios to compare / contrast usage.
        <br />
        <br />
        OpenWeather API
        <br />
        Google Maps Geocode API
        <br />
        Unsplash API
        <br />
        TailwindCSS styling
      </div>
      <img
        src={"/weather1.png"}
        alt="first; example of weather conditions"
        className="p-8 pr-32"
      />
      <img
        src={"/weather2.png"}
        alt="second; example of weather conditions"
        className="p-8 pr-24"
      />
    </div>
  )
}

export default Community;
