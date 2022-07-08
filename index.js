import express from 'express'
import mongoose from 'mongoose'
import {routerProductCard} from './router.js'
import fileUpload from 'express-fileupload'
import cors from "cors";

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URI;

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(cors());
app.use(fileUpload({}))
app.use('/api',routerProductCard)



async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server Start on Port ' + PORT))
    } catch (e) {
        console.log(e);
    }
}

startApp()