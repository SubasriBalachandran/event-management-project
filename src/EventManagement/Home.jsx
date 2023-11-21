import { Skeleton } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "HoneyDew",
      }}
    >
      {" "}
      <Skeleton
        variant="rounded"
        width={210}
        height={60}
        style={{
          backgroundColor: "black",
          fontSize: "40px",
          marginTop: 30,
          color: "red",
          fontFamily: "Gabriola",
        }}
      >
        EventsHub
      </Skeleton>
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3Ds"
      ></img>
      <img
        alt="party"
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D"
      ></img>
      <img
        alt="Dance"
        src="https://cache.careers360.mobi/media/article_images/2022/7/5/Top-10-Fashion-Shows-in-India.webp"
      />
    </div>
  );
};

export default Home;
