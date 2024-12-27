import { UserType } from "@/types";
import { create } from "zustand";

const usersGlobalStore = create<UsersGlobalStoreType>((set) => ({
  loggedInUserData: null,
  setLoggedInUserData: (data: any) => set({ loggedInUserData: data }),
}));

export default usersGlobalStore;

export interface UsersGlobalStoreType {
  loggedInUserData: UserType | null;
  setLoggedInUserData: (data: UserType) => void;
}
