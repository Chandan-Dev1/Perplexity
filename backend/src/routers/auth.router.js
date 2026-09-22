import express from "express"
const AuthRoutes  = express.Router()
import {register} from '../controllers/auth.controller.js'
import {registerValidator} from '../validator/auth.validator.js'
import {verifyEmail}from '../controllers/auth.controller.js'

AuthRoutes.post("/register",registerValidator,register)

AuthRoutes.get("/verified-email",verifyEmail)




export default AuthRoutes