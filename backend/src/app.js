import express from "express";
import AuthRoutes from "./routers/auth.router.js";
import ChatRoutes from './routers/chat.router.js'
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", AuthRoutes);
app.use("/api/chat/",ChatRoutes)

export default app;