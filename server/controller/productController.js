import Product from "../model/Product.js"

const productController = {
    getall: async(req,res)=>{
        try {
            const products =await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    create: async(req,res)=>{
        try {
            const newProduct = await new Product(
                {
                    title: req.body.title,
                    image: req.body.image,
                    desc: req.body.desc
                }
            )
            const product = await newProduct.save()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            const product = await Product.findOneAndUpdate({_id: req.body._id},{
                title: req.body.title,
                image: req.body.image,
                desc: req.body.desc
            },{new: true})
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    delete: async(req,res)=>{
        try { 
                await Product.findOneAndDelete({_id: req.params.id},function(error,product){
                    if (error) {
                        res.status(500).json(error)
                    }
                    else{
                        res.status(200).json(product)
                    }
                })
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

export default productController