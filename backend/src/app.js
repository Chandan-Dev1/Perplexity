import express from 'express'
import AuthRoutes from "./routers/auth.router.js"
import cookieparser from 'cookie-parser'
const app =express()

app.use(express.json())
app.use(cookieparser())
app.use("/api/auth",AuthRoutes)

export default app