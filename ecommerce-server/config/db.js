import mongoose from 'mongoose';
import colors from 'colors';

const connectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
          });
          console.log(`DB is connect in ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;
