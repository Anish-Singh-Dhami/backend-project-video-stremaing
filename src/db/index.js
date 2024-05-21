import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// estaiblishing the db connection asynchronously : EITHER use async-await with try-cath, OR use promises.then.catch

/*
async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connection Established With DB Host : ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("MongoDB Connection Failed !! ", err);
        process.exit(1);
    }
}
*/


async function connectDB() {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then((connectionInstance)=> {
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