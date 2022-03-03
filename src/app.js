const express = require("express")
const config = require("./config")
const loaders = require("./loaders")
const { ProductRoutes, UserRoutes, OrderRoutes } = require("./routes")
const app = express()

app.use(express.json())

config()
loaders()

app.use("/products", ProductRoutes)
app.use("/users", UserRoutes)
app.use("/orders", OrderRoutes)

app.listen(process.env.APP_PORT, () => {
	console.log(`Server started on ${process.env.APP_PORT}`)
})

