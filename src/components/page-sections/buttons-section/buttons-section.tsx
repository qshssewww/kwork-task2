'use client'

import SectionTitle from "@/components/ui/section-title/section-title";
import styles from "./buttons-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import { SyntheticEvent } from "react";
import Link from "next/link";

interface Props {
  sectionTitle: string;
  sectionTitlePosition: "left" | "center";
  buttonsArr: any[];
  extraClass?: string;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
}

function ButtonsSection({
  sectionTitle,
  sectionTitlePosition,
  buttonsArr,
  onClick,
  extraClass,
}: Props) {
  // console.log(buttonsArr)
  return (
    <section className={`${styles.section} ${extraClass}`}>
      <SectionTitle content={sectionTitle} position={sectionTitlePosition} />
      <ul className={styles.buttonsList}>
        {buttonsArr.map((el: any, index: number) => {
          return (
            <li key={index} className={styles.buttonsItem}>
              {
                el.name.length
                ?
                <Link className={styles.link} href={el.url}>
                <Button
                  onClick={onClick}
                  value={el.name}
                  extraClass={styles.button}
                  key={index}
                  content={el.name}
                  background="white"
                  contentColor="grey"
                />
              </Link>
                :
                null
              }
              
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ButtonsSection;
