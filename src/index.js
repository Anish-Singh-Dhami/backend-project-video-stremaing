import connectDB from "./db/index.js";

// just to use import statement instead of required("dotenv").config({path:"./env"}) , i.e. commonJS
// will have to change the dev script a bit add "-r dotenv/config --experimental-json-modules"
import dotenv from "dotenv"
dotenv.config({
    path: "./env"
})

connectDB();