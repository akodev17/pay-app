import React from "react";
import { layout, styles } from "../Util/styles";
import { card } from "../assets";
import Button from "./Button";

const Contract = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>Oson qadamlar bilan <br className="sm:block hidden"/> yaxshiroq bo'ling</h2>

        <p className={`${styles.paragraph} max-[550px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis numquam, pariatur debitis, dolorum commodi error eaque saepe voluptas quidem enim placeat fugiat eligendi eius.</p>
      <Button title="Boshlash"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  );
};

export default Contract;
