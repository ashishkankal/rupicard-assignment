import React from "react";
const HeroVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute left-0 top-0 right-0 bottom-0 z-0 w-screen h-screen object-cover"
    >
      <source src={"/nxt_wave_bg.mp4"} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
