import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  let name = user?.firstName + " " + user?.lastName;
  let email = user?.emailAddresses[0].emailAddress;
  let clerkUserId = user?.id;
  let profilePicture = user?.imageUrl;

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <UserButton /> */}
      <div className="flex flex-col gap-3">
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>clerk User Id: {clerkUserId}</span>
        <img src={profilePicture} height={100} width={100} />
      </div>
    </div>
  );
}
