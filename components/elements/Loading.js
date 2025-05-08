import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/imgs/template/Loading.json";

const Loading = () => (
  <div className="loading-container">
    <Lottie animationData={animationData} loop={true} autoplay={true} speed={10} style={{ width: 100, height: 100 }}/>
  </div>
);

export default Loading;
