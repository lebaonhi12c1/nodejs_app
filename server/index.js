import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import autRouter from './routes/auth.js'
import productRouter from './routes/product.js'
const app = express()
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
//ROUTES

app.use('/v1/auth',autRouter)
app.use('/v1/product',productRouter)

//CONECT TO MONGGOODB ANH RUN TO SERVER
mongoose.connect(process.env.MONGOOSE_URL,()=>{
    console.log('Conect to mongoodb successfully !!')
    app.listen(process.env.PORT,()=>{
        console.log("Server is running ....")
    })
})

