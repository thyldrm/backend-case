const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("mdp-case","postgres","123456",{
	dialect:"postgres",
})

module.exports=sequelize