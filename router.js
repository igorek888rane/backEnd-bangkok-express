import Router from "express";
import ProductController from "./ProductCard/ProductController.js";


export const routerProductCard = new Router()

routerProductCard.post('/product',ProductController.create)
routerProductCard.get('/product',ProductController.getAll)
routerProductCard.get('/product/:id',ProductController.getOne)
routerProductCard.put('/product',ProductController.update)
routerProductCard.delete('/product/:id',ProductController.delete)



