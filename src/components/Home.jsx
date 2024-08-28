import React from "react";
import { styles } from "../Util/styles";
import { discount, home } from "../assets";
import Button from "./Button";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`${styles.flexCenter} flex-row flex-wrap`}>
        <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
          <img
            src={home}
            alt="robo"
            className="w-[100%] rounded object-cover h-[100%] relative z-10 mr-40 "
          />
        </div>
        
        <div
          className={`flex -1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-20`}
        >
          <div className="flex flex-row py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
            <img
              src={discount}
              alt="discount"
              className="w-[32px] h-[32px] mr-3"
            />
            <p className={`${styles.paragraph}`}>
              <span className="text-white">10% </span> chegirma{" "}
              <span className="text-white">1 oylik </span> hisob uchun
            </p>

          </div>

          {/* <div className="absolute z-0 w-[40%] h-[40%] top-0 pink-gradient"></div>
        <div className="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-0 w-[50%] h-[55%] right-20 bottom-20 blue__gradient"></div> */}

          <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi bosiqch <br />{" "}
            <span className="text-gradient"> to'lov usuli</span>
          </h1>
          <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          cupiditate inventore facilis, repudiandae expedita numquam possimus
          sunt eaque recusandae tempora!
        </p>
        <Button title="Boshlash"></Button>
        </div>
        {/* Descriptation */}
        </div>
        {/* Title */}
      </div>
    </section>
  );
};

export default Home;
