import mongoose from "mongoose";

const initialised = false;

export const connect = async ()=>{
    mongoose.set('strictQuery', true);
    if( initialised){
        console.log("already connected to mongoose")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:"next-blog",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("connected to mongodb")
        initialised=true;
    } catch (error) {
        console.log('error connecting to Mongodb', error)
    }
}