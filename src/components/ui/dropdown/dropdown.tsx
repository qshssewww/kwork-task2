"use client";

import { SyntheticEvent, useState } from "react";
import ArrowDown from "../../../images/logos/icons/arrow-down.svg";
import styles from "./dropdown.module.scss";
import clsx from "clsx";

export interface Props {
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  extraClass?: string;
  content?: string;
  arr?: any;
  title: string;
  size?: "small" | "medium";
  color?: "white" | "darkBlue";
}

const DropDown: React.FC<Props> = ({ extraClass, arr, size, title, color }) => {
  const className = clsx(
    styles.container,
    {
      [styles?.[`dropdown_size_${size}`]]: size,
      [styles?.[`dropdown_color_${color}`]]: color,
    },
    extraClass
  );

  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const openDropDownMenu = () => {
    setIsDropDownActive(true);
  };

  const closeDropDownMenu = () => {
    setIsDropDownActive(false);
  };

  return (
    <div
      className={className}
      onMouseOver={openDropDownMenu}
      onMouseOut={closeDropDownMenu}
    >
      <div className={styles.titleContainers}>
        <div
          className={`${styles.titleContainer} ${
            isDropDownActive && styles.titleContainerActive
          }`}
        >
          <p className={styles.title}>{title}</p>
          <ArrowDown className={styles.arrow} width={16} height={16} />
        </div>
      </div>
      <div
        className={`${styles.transparentContainer} ${
          isDropDownActive && styles.transparentContainerActive
        }`}
      >
        <div className={styles.dropDownListsContainers}>
          <ul className={styles.dropDownListContainer}>
            {arr &&
              arr.map((el: any, index: number) => {
                return (
                  <li
                    className={styles.dropDownListItem}
                    li-name={el.name}
                    key={index}
                  >
                    <p className={styles.listItemContent}>{el.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
