const { User } = require("../models/user");
const { Wishlist } = require("../models/wishlist");

module.exports = {
  addToWishlist: async (req, res) => {
    try {
      const { name, background_image, genres, userId } = req.body;
      await Wishlist.create({ name, background_image, genres, userId });
      res.sendStatus(200);
    } catch (error) {
      console.log("ERROR in ADD Wishlist");
      console.log(error);
      res.sendStatus(400);
    }
  },
  getCurrentUserWishlist: async (req, res) => {
    try {
      const { userId } = req.params;
      const wishlist = await Wishlist.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(wishlist);
    } catch (error) {
      console.log("ERROR w Get Current User Wishlist");
      console.log(error);
      res.sendStatus(400);
    }
  },
  deleteGame: async (req, res) => {
    try {
      const { userId, gameId } = req.params;
      console.log(userId, gameId)
      await Wishlist.destroy({ where: { id: +gameId, userId: +userId } });
      const wishlist = await Wishlist.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(wishlist);
    } catch (error) {
      console.log("ERROR w DELETE Current User Wishlist");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
