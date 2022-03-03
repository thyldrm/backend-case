const sequelize = require("./db")

module.exports = () => {
	sequelize.sync().then(()=>console.log("DB is ready..."))
}