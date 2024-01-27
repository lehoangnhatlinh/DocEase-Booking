import mongoose from "mongoose"

const connectDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }); 
        console.log('MongoDB database is connected');
    } catch (error) {
        console.log('MongoDB database is connection failed');
    }
}

export default connectDB;