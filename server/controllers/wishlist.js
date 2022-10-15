const {User} = require("../models/user");
const {WishList, Wishlist} = require("../models/wishlist");

module.exports = {
    addWishlist: async (req, res) => {
        try {
            const {name, background_image, genres, userId} = req.body
            await Wishlist.create(name, background_image, genres, userId)
        } catch (error) {
            console.log("ERROR in ADD Wishlist")
            console.log(error)
            res.sendStatus(400)
        }
    }
}