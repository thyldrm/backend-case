const httpStatus = require("http-status")
const {createProduct,updateProduct,deleteProduct,allProducts,detailProduct} = require("../services/Products")

const create = async (req,res) => {
	createProduct(req.body)
		.then((response)=>{
			res.status(httpStatus.CREATED).send(response)
		})
		.catch((err)=>{
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		})
}

const update = async (req,res) => {
	updateProduct(req.body, req.params?.id)
		.then(() => {
			res.status(httpStatus.OK).send({message:"Güncelleme başarılı."})
		})
		.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({err : "Güncelleme sırasında bir hata oluştu."}))
}

const remove = (req,res) => {
	if(!req.params?.id) {
		return res.status(httpStatus.BAD_REQUEST).send({
			message: "ID bilgisi eksik"
		})
	}
	deleteProduct(req.params?.id)
		.then(deleteItem => {
			if(!deleteItem) {
				return res.status(httpStatus.NOT_FOUND).send({
					message : "Böyle bir ID bulunamamaktadır."
				})
			}
			res.status(httpStatus.OK).send({message:"Ürün silindi."})
		})
		.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({err : "Silme sırasında bir hata oluştu."}))
}

const all = (req, res) => {
	allProducts()
		.then((response)=>{
			res.status(httpStatus.OK).send(response)
		})
		.catch((err)=>{
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		})  
}

const detail = (req, res) => {
	detailProduct(req.params?.id)
		.then(response => {
			if(!response) {
				return res.status(httpStatus.NOT_FOUND).send({
					message : "Böyle bir ID bulunamamaktadır."
				})
			}
			res.status(httpStatus.OK).send(response)
		})
		.catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)) 
}

module.exports = {create,update,remove,all,detail}