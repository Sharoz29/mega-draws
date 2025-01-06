import { UserButton } from "@clerk/nextjs";
import Steps from "@/components/Steps/Steps";
import { connectMongoDb } from "@/config/db";
import { getCurrentUserFromDb } from "@/server-actions/megaDrawsUsers";
import VideoCover from "@/components/VideoCover/VideoCover";
import Security from "@/components/Security/Security";
import LotterySlider from "@/components/LotterySlider/LotterySlider";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LatestWinners from "@/components/LatestWinners/LatestWinners";
import ClientsReviews from "@/components/ClientsReviews/ClientsReviews";

// connectMongoDb();
export default async function Home() {
  // const response = await getCurrentUserFromDb();
  // const { name, email, clerkUserId } = response.data;

  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <VideoCover
          source={"/lottery-tickets.mp4"}
          header={"Unlock Big Wins with Mega Draws!"}
          description={
            "Enter now for your chance to win huge prizes in our exciting Mega Draws! The more you enter, the higher your chances to win. Don't miss out on the opportunity of a lifetime!"
          }
        />
        <Steps />
        <Security />
        <LotterySlider />
        <WhyChooseUs />
        <LatestWinners />
        <ClientsReviews />
        {/* <UserButton />
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Clerk User Id: {clerkUserId}</span> */}
      </div>
    </div>
  );
}
