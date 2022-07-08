import mongoose from 'mongoose'

const ProductCard = new mongoose.Schema({
    name :{type:String,required:true},
    price :{type:Number,required:true},
    category :{type:String,required:true},
    image :{type:String,required:true},
    imageForSlider :{type:String},
    id :{type:String,required:true},
    spiciness :{type:Number,required:true},
    vegeterian :{type:Boolean},
    nuts :{type:Boolean},

})

export default mongoose.model('ProductCard',ProductCard)