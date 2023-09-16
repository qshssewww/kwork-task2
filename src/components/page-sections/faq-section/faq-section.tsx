'use client'

import Accordion from "@/components/ui/accordion/accordion";
import styles from "./faq-section.module.scss";
import SectionTitle from "@/components/ui/section-title/section-title";

interface Props {
  sectionTitle: string;
  titlePosition: "left" | "center";
  data: any;
  extraClass?: string;
}

function FAQSection({ data, sectionTitle, titlePosition, extraClass }: Props) {
  return (
    <section className={`${styles.container} ${extraClass}`}>
      <SectionTitle content={sectionTitle} position={titlePosition} />
      {data.map((el: any, index: number) => {
        return (
          <Accordion
            key={index}
            summary={el.titleEvent}
            details={el.descriptionEvent}
          />
        );
      })}
    </section>
  );
}

export default FAQSection;
