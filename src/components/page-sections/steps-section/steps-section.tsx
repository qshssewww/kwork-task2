"use client";

import SectionTitle from "@/components/ui/section-title/section-title";
import styles from "./steps-section.module.scss";
import CardWithStep from "@/components/ui/cards/card-with-step/card-with-step";

interface Props {
  data: any;
  titlePosition?: "center" | "left";
}

function StepsSection({ data, titlePosition }: Props) {
  const stepsApiData = data?.Step;

  return stepsApiData ? (
    <section className={styles.main}>
      <SectionTitle
        content={stepsApiData?.name}
        position={titlePosition}
      ></SectionTitle>
      <div className={styles.cardContainer}>
        {stepsApiData.step.map((el: any, index: number) => {
          return (
            <CardWithStep
              key={index}
              image={el.icon}
              title={el.subtitle}
              content={el.text}
            />
          );
        })}
      </div>
    </section>
  ) : null;
}

export default StepsSection;
