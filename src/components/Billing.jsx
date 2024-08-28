import React from "react";
import { layout, styles } from "../Util/styles";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Hisob-Kitob va Fakturial <br className="sm:block hidden"/> Oson Boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cumque ullam, similique beatae odio eligendi fugit aliquid quos eum quisquam!
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={google} alt="google" className="w-[129px] h-[43px] object-contain mr-5 cursor-pointer" />
        <img src={apple} alt="google" className="w-[129px] h-[43px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
