import dotenv from 'dotenv'
dotenv.config()
import ConnectDatabase from './src/config/database.js'
import app from "./src/app.js"


app.listen(3000,()=>{
    console.log("server is runing ")
})