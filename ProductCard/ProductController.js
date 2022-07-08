import ProductService from "./ProductService.js";

class ProductController {
    async create(req,res){
        try{
            const product = await ProductService.create(req.body,req.files.image,req.files.imageForSlider)
            res.json(product)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res) {
        try{
            const product = await ProductService.getAll()
            return res.json(product)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const product = await ProductService.getOne(req.params.id)
            return res.json(product)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {

            const updateProduct = await ProductService.update(req.body)
            return res.json(updateProduct)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id)
            return res.json(product)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new ProductController()