import app from './src/app.js';
import dotenv from "dotenv"; 
import connectDB from './src/configs/db.js'

//dotenv config
dotenv.config(); 


//listen port
const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log('Server is running on port: ', port); 
    connectDB(); 
})