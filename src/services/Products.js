const Product = require("../models/Products")

const createProduct = (data) => {
	return Product.create(data)
}

const updateProduct = (data, id) => {
	return Product.update(data, { where: { id } })
}

const deleteProduct = (id) => {
	return Product.destroy({ where: { id } })
}

const allProducts = () => {
	return Product.findAll()
}

const detailProduct = (id) => {
	return Product.findOne({ where: { id } })
}

module.exports = { createProduct, updateProduct, deleteProduct, allProducts, detailProduct }