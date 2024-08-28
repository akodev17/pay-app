import React from "react";
import { layout, styles } from "../Util/styles";
import Button from "./Button";
import { features } from "../Util/constants";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Biznes Boshqaring <br className="sm:block hidden" />
          va Rivojlantiring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem cum laborum assumenda iusto qui architecto consequatur
          quas esse ex cumque.
        </p>
        <Button title="Davom eting"></Button>
      </div>
      <div className={layout.sectionImg}>
        {features.map((feat, id) => (
          <FeatureCard key={feat.id} {...feat} id={id}>
            {" "}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Business;
