import {connect} from "mongoose";
import { disconnect } from "mongoose";

async function connectionToDatabase(){
    try {
   const db =  await connect(process.env.MONGODB_URL);
    console.log("DB connected succesfully"+db.connection.host);
    
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB");
    }
}

const disconnectFromDatabase= async ()=>{
try {
    await disconnect();
} catch (error) {
    throw new Error("Cannot disconnect from DB")
}
}

export default {connectionToDatabase,disconnectFromDatabase}