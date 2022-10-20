import React, { useEffect, useState, useContext } from "react";
import { REACT_APP_API_KEY } from "../config";
import AuthContext from "../store/authContext";

const axios = require("axios");

const Home = () => {
  const { userId } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);
  const decrement = () => setPage(page - 1);
  const increment = () => setPage(page + 1);
  console.log(page);

  const [gameList, setGameList] = useState([]);

  const authCtx = useContext(AuthContext);
  console.log(authCtx, "line11");

  const options = {
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&page=${page}`,
  };

  const getGames = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGameList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .get(`http://localhost:4005/wishlist/${userId}`)
      .then((res) => setWishlist(res.data.map((game) => game.name)))
      .catch((error) => console.log(error));
  };

  const addGame = (game) => {
    let genreName = "";
    game.genres.forEach((genre) => (genreName += genre.name + ","));
    console.log(genreName);

    const body = {
      name: game.name,
      background_image: game.background_image,
      genres: genreName,
      userId: authCtx.userId,
    };
    axios
      .post("http://localhost:4005/wishlist", body)
      .then((res) => getGames());
  };

  useEffect(() => {
    getGames();
  }, [page]);
  console.log(wishlist, gameList);
  return (
    <div>
      <div className="btnContainer">
        <button className="btn" onClick={page !== 1 && decrement}>
          Previous
        </button>
        <button className="btn" onClick={increment}>
          Next
        </button>
      </div>
      <div className="gameCardContainer">
        {gameList
          .filter((game) => {
            return !wishlist.includes(game.name);
          })
          .map((game) => {
            return (
              <div className="gameCard">
                <div className="gameDetails">
                  <h2 className="gameName">{game.name}</h2>
                  <img
                    className="gameImg"
                    src={`${game.background_image}`}
                    alt="game"
                  />

                  <div className="ptagContainer">
                    {game.genres.map((genre) => (
                      <p className="ptag">{genre.name}</p>
                    ))}
                  </div>
                </div>
                <button className="gameBtn" onClick={() => addGame(game)}>
                  Add Game
                </button>
              </div>
            );
          })}
      </div>
      <div className="btnContainer">
        <button className="btn" onClick={page !== 1 && decrement}>
          Previous
        </button>{" "}
        <button className="btn" onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
