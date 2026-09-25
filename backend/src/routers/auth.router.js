import express from "express"
const AuthRoutes  = express.Router()
import {register,login,getMe} from '../controllers/auth.controller.js'
import {registerValidator} from '../validator/auth.validator.js'
import {verifyEmail}from '../controllers/auth.controller.js'
import {loginValidator} from '../validator/auth.validator.js'
import {authUser} from '../middlewares/auth.middleware.js'

AuthRoutes.post("/register",registerValidator,register)
AuthRoutes.post("/login",loginValidator,login)
AuthRoutes.get("/get-me",authUser,getMe)
AuthRoutes.get("/verified-email",verifyEmail)





export default AuthRoutes