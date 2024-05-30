import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shashwatsumanat49:Shashwat49@cluster0.nc9ouql.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}