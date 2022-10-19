import React from "react";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

import AuthContext from "../store/authContext";

const Wishlist = () => {
  const { userId } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);

  const authCtx = useContext(AuthContext);
  console.log(authCtx, "line11");

  
  const getUserWishlist = useCallback(() => {
    axios
    .get(`http://localhost:4005/wishlist/${userId}`)
    .then((res) => setWishlist(res.data))
    .catch((error) => console.log(error));
  }, [userId]);
  
  const removeGame = (game) => {

    axios
      .delete(`http://localhost:4005/wishlist/${userId}/${game.id}`)
      .then((res) => setWishlist(res.data));
  };

  useEffect(() => {
    getUserWishlist();
  }, []);
  

  console.log(wishlist);
  return (
  <div className="mainLogin">
    <div className="gameCardContainer">
      {wishlist.map((game) => {
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
                {game.genres.split(",").map((genre) => (
                  <p className="ptag">{genre}</p>
                ))}
                <button className="gameBtnRed" onClick={() => removeGame(game)}>
                  Remove Game
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Wishlist;

// I'm not crying, you're crying!
