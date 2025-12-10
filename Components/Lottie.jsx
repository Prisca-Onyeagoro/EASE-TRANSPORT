"use client";

import React from "react";
import { useLottie } from "lottie-react";
import LOADING from "../assets/lotties/LOADING.json";

const style = {
  height: 200,
  background: "transparent",
};

const options = {
  animationData: LOADING,
  loop: true,
  autoplay: true,
};

const LottieLoading = () => {
  const { View } = useLottie(options, style);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-transparent">
      {View}
      Loading...
    </div>
  );
};

export default LottieLoading;
