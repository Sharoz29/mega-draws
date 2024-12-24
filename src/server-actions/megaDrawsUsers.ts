"use server";
import { connectMongoDb } from "@/config/db";
import megaDrawsUserModel from "@/models/megaDrawsUserModel";
import { currentUser } from "@clerk/nextjs/server";

connectMongoDb();

export const getCurrentUserFromDb = async () => {
  try {
    // if user is already present in db, return user
    const clerkUserData = await currentUser();
    const user = await megaDrawsUserModel.findOne({
      clerkUserId: clerkUserData?.id,
    });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }

    // if user is not present in db, create that user

    let newUser = new megaDrawsUserModel({
      name: clerkUserData?.firstName + " " + clerkUserData?.lastName,
      email: clerkUserData?.emailAddresses[0].emailAddress,
      clerkUserId: clerkUserData?.id,
      isActive: true,
      isAdmin: false,
    });

    const savedUser = await newUser.save();
    return {
      success: true,
      data: savedUser,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};
