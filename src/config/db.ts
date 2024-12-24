import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO!);
    console.log("Successfully connected to mongo");
  } catch (error) {
    console.log("Error connectiong to mongodb:", error);
  }
};
