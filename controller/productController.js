import Product from "../model/Product"

const productController = {
    getall: async(req,res)=>{
        try {
            const products = Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    create: async(req,res)=>{
        try {
            const newProduct = new Product(
                req.body.title,
                req,body.image,
                req.body.desc
            )
            const product = await newProduct.save()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            const product = Product.findByIdAndUpdate({_id: req.body.id},{
                title: req.body.title,
                image: req.body.image,
                desc: req.body.image
            })
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}