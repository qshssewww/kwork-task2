"use client";

import { NextPage } from "next";
import styles from "./menu-dropdown.module.scss";
import ArrowDown from "@/images/logos/icons/arrow-down.svg";
import { useState } from "react";
import clsx from "clsx";
import { useParams } from "next/navigation";
import Link from "next/link"

interface Props {
  data: any;
}

const MenuDropdown: NextPage<Props> = ({ data }) => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setIsOpenState = () => {
    setIsOpen(!isOpen);
  };

  const arrowClassName = clsx(styles.arrowDown, {
    [styles?.[`arrowUp`]]: isOpen,
  });
  return (
    <li className={styles.container}>
      <div onClick={()=>{
        if(data?.nesting?.length){
          setIsOpenState()
        }
        }} className={styles.titleContainer}>
          {
            data?.nesting?.length
            ?
        <p className={styles.title}>{data?.name}</p>
            :
            <Link href={`${data.url}`}>
            <p className={styles.title}>{data?.name}</p>
            </Link> 
          }
        {data?.nesting?.length ? (
          <ArrowDown className={arrowClassName} width={16} height={16} />
        ) : (
          <></>
        )}
      </div>
      {isOpen && (
        <div className={styles.dropContainer}>
          {
            data?.nesting?.length 
            ?
          data?.nesting.map(
            (el: { name: string; url: string }, index: number) => {
              return (
                <a className={styles.dropContent} href={`/${params.lang}${el.url}`} key={index}>
                  {el.name}
                </a>
              );
            }
          )
          :
          null
          }
        </div>
      )}
    </li>
  );
};

export default MenuDropdown;
