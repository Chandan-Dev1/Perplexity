import dotenv from 'dotenv'
dotenv.config()
import ConnectDatabase from './src/config/database.js'
import app from "./src/app.js"
import http from 'http'
import {initSocket} from './src/sockets/server.socket.js'


const httpServer = http.createServer(app)
initSocket(httpServer)
httpServer.listen(3000,()=>{
    console.log("server is runing ")
})