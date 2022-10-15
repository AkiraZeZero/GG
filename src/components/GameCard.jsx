import React from "react";

const GameCard = ({game, gameList,addGame, removeGame}) => {
    const inWishlist = gameList.filter((list) => {
        return list.id === game.id;
    });

    const button = 
    inWishlist.length === 0 ? (
        <button onClick={() => addGame(game)}>Add to Wishlist</button>
    ) : (
        <button onClick={() => removeGame(game)}>Remove Game</button>
    );

    return (
        <div>
            </div>
    )
}

export default GameCard