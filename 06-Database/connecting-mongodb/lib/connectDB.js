import mongoose from "mongoose";

const DB_URI = "mongodb+srv://mayank:<password>@cluster0.t0e3cot.mongodb.net/"

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return
        }
        await mongoose.connect(DB_URI, {
            dbName: 'todoApp'
        })
        mongoose.connection.readyState
        console.log("DB connected !!!")

    } catch (error) {
        console.log(error)
        console.log("Can't connect to DB")
        process.exit(1)
    }
}