import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

async function ConnectDatabase() {
    await mongoose.connect(process.env.MONGO_URI)
  console.log("database connect")
}

ConnectDatabase()
export default ConnectDatabase