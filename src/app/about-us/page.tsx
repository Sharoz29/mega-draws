import ImageCover from "@/components/ImageCover/ImageCover";
import React from "react";
import Lottery from "@/assets/Lottery-8.jpg";
import Security from "@/components/Security/Security";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ClientsReviews from "@/components/ClientsReviews/ClientsReviews";

export default function AboutUs() {
  return (
    <div>
      <ImageCover
        source={Lottery}
        header="About Us"
        description="Welcome to Mega Draws! Your trusted platform for secure and exciting lottery games. Play, win, and make your dreams a reality!"
      />
      <Security />
      <ClientsReviews />
      <WhyChooseUs />
    </div>
  );
}
