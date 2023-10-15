import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../assets/animations/bird_walk.json";

function BirdAnimation() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

export default BirdAnimation;
