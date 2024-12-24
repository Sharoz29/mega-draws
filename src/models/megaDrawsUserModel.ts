import mongoose from "mongoose";

const megaDrawsUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    clerkUserId: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const megaDrawsUserModel = mongoose.model(
  "megaDrawsUsers",
  megaDrawsUserSchema
);
export default megaDrawsUserModel;
