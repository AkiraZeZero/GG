require('dotenv').config()

const express = require("express")
const cors = require("cors")

const {sequelize} = require("./util/database")
const {User} = require("./models/user")
const {PORT} = process.env
const {login, register} = require("./controllers/auth")
const {isAuthenticated} = require("./middleware/isAuthenticated")
const { Wishlist } = require('./models/wishlist')
const {addToWishlist, getCurrentUserWishlist} = require("../server/controllers/wishlist")
const { deleteGame } = require("./controllers/wishlist")

const app = express()

app.use(express.json())
app.use(cors())


User.hasOne(Wishlist)
Wishlist.belongsTo(User)

//  endpoints below
app.post("/register", register)
app.post("/login", login)

app.post("/wishlist", addToWishlist)

app.get("/wishlist/:userId", getCurrentUserWishlist)

app.delete("/wishlist/:userId/:gameId", deleteGame)

// ^^^ endpoints ^^^

sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
})
.catch(err => console.log(err))



