require('dotenv').config()

const express = require("express")
const cors = require("cors")

const {sequelize} = require("./util/database")
const {User} = require("./models/user")
const {PORT} = process.env
const {login, register} = require("./controllers/auth")
const {isAuthenticated} = require("./middleware/isAuthenticated")

const app = express()

app.use(express.json())
app.use(cors())


//  endpoints below
app.post("/register", register)
app.post("/login", login)

// app.post("/wishlist", addWishlist)

sequelize.sync({ force: true })
.then(() => {
    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
})
.catch(err => console.log(err))



