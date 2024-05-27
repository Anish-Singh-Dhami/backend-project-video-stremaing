import app from "./app.js";
import connectDB from "./db/index.js";

// just to use import statement instead of required("dotenv").config({path:"./env"}) , i.e. commonJS
// will have to change the dev script a bit add "-r dotenv/config --experimental-json-modules"
import dotenv from "dotenv"
dotenv.config({
    path: "./env"
})

// on "error" event
app.on("error", ()=>{
    console.log("Express Side Error !!! ", error);
})

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server Running at  http://localhost:${process.env.PORT}`);
    })
    app.get('/', (req, res)=> {
        res.send("Hello There!!");
    })
})
.catch((error) => {
    console.log("Error in connection !!! ", error);
})