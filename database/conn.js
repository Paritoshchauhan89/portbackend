import mongoose from "mongoose"


const Connection = async(DB_URL) => {
    const URL = `${DB_URL}`
    
    try {
mongoose.set('strictQuery', true)
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database connection Sucessfully');
    }
    catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;
