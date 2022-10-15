import React, { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../config";
const axios = require("axios");

const Home = () => {
  const [gameList, setGameList] = useState([]);
  // const [page, setPage] = useState(1);

  const addGame = (game) => setGameList([...gameList, game]);
  // const addWishlist = (game) => setWishlist([])

  const options = {
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`,
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setGameList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
      <div className="gameCardContainer">
      {gameList.map((game) => {
        console.log(game);
        return (
          <div className="gameCard">
             <h2>{game.name}</h2>
            <img className="gameImg" src={`${game.background_image}`} alt="game" />
            {game.genres.map((genre) => (
              <p>{genre.name}</p>
            ))}
            <button className="gameBtn" onClick={() => addGame(game)}>Add Game</button>
          </div>
        );
      })}
      </div>
  );
};

export default Home;
