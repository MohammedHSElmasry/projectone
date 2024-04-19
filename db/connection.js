import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

export const connect = async ()=>{
   await mongoose.connect(`mongodb+srv://01140775155dd:KDSTycDdfVkEbAKJ@cluster0.nypuppi.mongodb.net/`).then(res=>{
    console.log(`connect db`);
   }).catch(err=>{
    console.log(err);
   });
}


export default connect