import { UserButton } from "@clerk/nextjs";
import { connectMongoDb } from "@/config/db";
import { getCurrentUserFromDb } from "@/server-actions/megaDrawsUsers";

connectMongoDb();
export default async function Home() {
  const response = await getCurrentUserFromDb();
  const { name, email, clerkUserId } = response.data;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-3">
        <UserButton />
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Clerk User Id: {clerkUserId}</span>
      </div>
    </div>
  );
}
