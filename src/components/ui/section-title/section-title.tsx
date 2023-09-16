import clsx from "clsx";
import styles from "./section-title.module.scss";

import { NextPage } from "next";

interface Props {
  content: string;
  position?: "left" | "center";
  extraClass?: string;
}

const SectionTitle: NextPage<Props> = ({
  content,
  position = "center",
  extraClass,
}) => {
  const titleClassName = clsx(
    styles.title,
    {
      [styles?.[`title_position_${position}`]]: position,
    },
    extraClass
  );
  return <h2 className={titleClassName}>{content}</h2>;
};

export default SectionTitle;
