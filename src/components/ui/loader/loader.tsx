import styles from "./loader.module.scss";

import { NextPage } from "next";

interface Props {}

const DotsLoader: NextPage<Props> = ({}) => {
  return <span className={styles.loader}></span>;
};

export default DotsLoader;
