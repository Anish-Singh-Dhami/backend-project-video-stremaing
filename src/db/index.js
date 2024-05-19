import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// estaiblishing the db connection asynchronously : EITHER use async-await with try-cath, OR use promises.then.catch
function connectDB() {
    // const promise =  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then((connectionInstance)=> {
        console.log(`Connection Established With DB Host : ${connectionInstance.connection.host}`);
        // console.log("Connection Instance Object : ", connectionInstance);
        return   connectionInstance;
    })
    .catch((err)=>{
        console.log("DB Connection Error : ", err);
        throw(err);
        // process.exit(1);
    })
}

export default connectDB;