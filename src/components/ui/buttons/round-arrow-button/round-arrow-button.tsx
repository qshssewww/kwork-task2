"use client";

import styles from "./round-arrow-button.module.scss";
import clsx from "clsx";
import ArrowRight from "@/images/logos/icons/arrow-right.svg";

interface Props {
  direction: "left" | "right";
  backgroundColor?: "transparent" | "white";
  size?: "small" | "medium" | "big";
  extraClass?: string;
}

const RoundArrowButton = ({
  direction,
  backgroundColor = "white",
  size = "big",
  extraClass,
}: Props) => {
  const buttonClassName = clsx(
    styles.button,
    {
      [styles?.[`button_direction_${direction}`]]: direction,
      [styles?.[`button_backgroundColor_${backgroundColor}`]]: backgroundColor,
      [styles?.[`button_size_${size}`]]: size,
    },
    extraClass
  );

  return (
    <div className={buttonClassName}>
      <ArrowRight className={styles.arrowImg} />
    </div>
  );
};

export default RoundArrowButton;
