import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/imgs/template/Maxopen-loading.json";

const Loading = () => (
  <div className="loading-container">
    <Lottie animationData={animationData} loop={true} autoplay={true} speed={10}/>
  </div>
);

export default Loading;
