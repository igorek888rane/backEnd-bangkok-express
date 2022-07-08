import FileService from "../FileService.js";
import ProductCard from "./ProductCard.js";

class ProductService {
    async create(product,image,imageforSlider) {
        const filelider = FileService.saveFile(imageforSlider);
        const fileName = FileService.saveFile(image);
        const createProduct = await ProductCard.create({...product, image: fileName,imageForSlider:filelider});
        return createProduct;

    }
    async getAll() {
        const product = await ProductCard.find();
        return product;
    }
    async getOne (id){
        if(!id){
            throw new Error('id not found')
        }
        const product = await ProductCard.findById(id)
        return product;
    }
    async update(product) {
        if (!product._id) {
            throw new Error('Id not found')
        }
        const updatePost = await ProductCard.findByIdAndUpdate(product._id, product, {new: true})
        return updatePost;
    }
    async delete(id) {
        if (!id) {
            throw new Error('Id not found')
        }
        const product = await ProductCard.findByIdAndDelete(id)
        return product;
    }


}

export default new ProductService();