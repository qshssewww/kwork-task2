import clsx from "clsx";
import styles from "./page-title.module.scss";

import { NextPage } from "next";

interface Props {
  content: string;
  position?: "left" | "center";
  extraClass?: string;
}

const PageTitle: NextPage<Props> = ({
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
  return <h1 className={titleClassName}>{content}</h1>;
};

export default PageTitle;
