const express = require("express")
const bodyParser = require("body-parser")
const productRoutes = require("./routes/productRoutes")

const app = express()

require("./config/db")

const categoryRoutes = require("./routes/categoryRoutes")

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.use("/", categoryRoutes)
app.use("/", productRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})