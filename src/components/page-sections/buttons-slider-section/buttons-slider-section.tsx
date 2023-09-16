"use client";

import styles from "./buttons-slider-section.module.scss";
import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import SplideButtonsSlider from "@/components/ui/splide/splide-buttons-slider/splide-buttons-slider";
import SectionTitle from "@/components/ui/section-title/section-title";

interface Props {
  data: any;
  title?: string;
  titlePosition?: "center" | "left";
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  link?: string;
  color?: "white" | "grey" | "darkBlue" | "transparent" | "orange";
  buttons?: "both" | "left" | "right";
  extraClass?: string;
}

const ButtonsSliderSection = ({
  data,
  title,
  titlePosition,
  onClick,
  link,
  buttons,
  color = "orange",
  extraClass,
}: Props) => {
  // console.log(data,"----appp")
  useEffect(() => {
    const initialActiveButtonState =
      data?.buttons?.length && data?.buttons[0]?.name?.toLowerCase();
    setActiveButtonState(initialActiveButtonState);
  }, [data]);

  const [activeButtonState, setActiveButtonState] = useState<string>();

  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isOverflown = useMemo(() => {
    return sectionRef.current &&
      sliderRef.current &&
      sliderRef.current.offsetWidth === sectionRef.current.offsetWidth - 40
      ? true
      : false;
  }, [sectionRef.current?.offsetWidth, sliderRef.current?.offsetWidth]);

  const attractionsArray = useMemo(() => {
    return (
      data?.buttons?.length &&
      data?.buttons
        .slice(0, 2)
        .filter((el: any) => el?.name?.toLowerCase() === activeButtonState)[0]
    );
  }, [activeButtonState, data]);

  return data?.buttons.length ? (
    <section className={`${styles.section} ${extraClass}`} ref={sectionRef}>
      {title && <SectionTitle content={title} position={titlePosition} />}
      <SplideButtonsSlider
        onClick={onClick}
        propRef={sliderRef}
        link={link}
        setState={setActiveButtonState}
        buttons={buttons}
        hasButtons={isOverflown ? true : false}
        buttonArray={data?.buttons}
        extraClass={styles.buttonsSlider}
        color={color}
      />
    </section>
  ) : null;
};

export default ButtonsSliderSection;
