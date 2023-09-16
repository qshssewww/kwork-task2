"use client";

import SectionTitle from "@/components/ui/section-title/section-title";
import styles from "./card-with-image-slider-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import { SyntheticEvent } from "react";

interface Props {
  data: any;
  hasButtons: boolean;
  titlePosition?: "left" | "center";
  path?: string;
  extraClass?: string;
  onCardClick?: (() => void) | ((e: SyntheticEvent) => void);
  link?: string;
}

const CardWithImageSliderSection = ({
  data,
  hasButtons,
  titlePosition,
  path,
  extraClass,
  onCardClick,
  link,
}: Props) => {
  return(
  <section className={`${styles.section} ${extraClass}`}>
    <SectionTitle
      content={data?.name}
      position={titlePosition}
      // extraClass={styles.titlePosition}
    />

    <div className={styles.cardsContainer}>
      <SplideMultipleSlider
        path={path}
        cardArray={data.cities}
        cardImageType="cover"
        like="none"
        label="none"
        cardExtraClass={styles.card}
        hasButtons={hasButtons}
        link={link}
        // arrow={true}
      />
    </div>
  </section>
  )
};

export default CardWithImageSliderSection;
