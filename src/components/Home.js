import React, { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../config";
const axios = require("axios");

const Home = () => {
    const [gameList, setGameList] =useState([])
  const options = {
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`,
  };

  useEffect(() => {
axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      setGameList(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])

  

  return (
    <div>
      <h1>This is the home that will house the games</h1>
      {gameList.map(game => {
        return(<h3>
            {game.name}
        </h3>)
      })}
    </div>
  );
};

export default Home;
