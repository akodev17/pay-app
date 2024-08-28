import React from "react";
import { styles } from "../Util/styles";
import { features } from "../Util/constants";

const FeatureCard = ({ icon, title, content, id }) => {
  return (
    <div
      className={`flex justify-center items-center p-6 rounded-[20px] bg-gradient mr-3 w-[300px]`}
    >
      <div className={`w-[64px] h-[64px] ${styles.flexCenter} bg-lightBlue`}>
        <img
          src={icon}
          alt={title}
          className={`w-[50%] h-[50%] object-contain cursor-pointer`}
        />
      </div>

      <div className="">
        <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-3 my-4">
          {title}
        </h4>
        <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24-px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
