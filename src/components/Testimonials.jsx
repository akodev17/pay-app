import React from "react";
import { styles } from "../Util/styles";
import { feedbacks } from "../Util/constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <div
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* <div className="absolute z-[0] w-[60%] -right-[50%] rounded bottom-40"></div> */}
      <div className="w-full flex justif-between items-center md:flex-row flex-col sm:mb-16 m-6 relative z-[1]">
        <h2 className={styles.heading2}>Odamlarni fikri biz haqimizda</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ullam
            obcaecati eius deserunt repellat exercitationem eveniet aperiam nam.
            Commodi, esse. */}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">

    {feedbacks.map((feed, id) => (
        <FeedbackCard key={feed.id} {...feed}></FeedbackCard>
    ))}

      </div>
    </div>
  );
};

export default Testimonials;
