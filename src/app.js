import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// MiddleWares : 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit : "20kb",
}))
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))
app.use(cookieParser())

import router from "./routes/user.routes.js";

// will do all the jobs relate to the route /api/v1/user
// like registeration, login
app.use("/api/v1/user", router);

export default app;