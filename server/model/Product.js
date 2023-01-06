
import { Schema } from 'mongoose';
import { model } from 'mongoose';

const productSchema = Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    desc:{
      type: String,  
    }
},{timestamps: true})

export default model('Product',productSchema)