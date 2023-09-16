"use client";

import Image from "next/image";
import styles from "./checkout-card.module.scss";
import photo from "@/images/photos/entertainment.png";
import Bin from "@/images/logos/icons/bin.svg";
import Counter from "../../inputs/counter/counter";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";


function CheckoutCard({data}:any) {
  const isMobile = useMediaQuery("(max-width:700px)");
  console.log(data,"---item");
  

  return (
    <li className={styles.listItem}>
      {!isMobile && (
        <Image
          className={styles.image}
          src={data.background_picture}
          alt="card photo"
          width={185}
          height={185}
        />
      )}

      <div className={styles.mainContent}>
        <div className={styles.titleContent}>
          {isMobile && (
            <Image
              className={styles.image}
              src={data.background_picture}
              alt="card photo"
              width={115}
              height={115}
            />
          )}
          <div className={styles.titleContainer}>
            <p className={styles.cardTitle}>{data.name}</p>
            <div className={styles.priceContainer}>
              <p className={`${styles.price} ${styles.lastPrice}`}>{data.old_price}</p>
              <p className={`${styles.price} ${styles.newPrice}`}>{data.price}</p>
            </div>
          </div>
          <button className={styles.deleteButton}>
            <Bin width={17} height={17} />
          </button>
        </div>
        <ul className={styles.cardInfoList}>
          <li className={styles.cardInfoItem}>
            <p className={styles.cardInfoTitle}>Date and Time</p>
            <p className={styles.cardInfoContent}>{data.date_and_time}</p>
          </li>
          <li className={styles.cardInfoItem}>
            <p className={styles.cardInfoTitle}>Included</p>
            <p className={styles.cardInfoContent}>Transfer, food</p>
          </li>
        </ul>
        <ul className={styles.peopleList}>
          <li className={styles.peopleListItem}>
            <Counter
              title="adults"
              minValue={data.adults}
              extraClass={styles.counter}
              titleExtraClass={styles.counterTitle}
            />
          </li>
          <li className={styles.peopleListItem}>
            <Counter
              title="kids"
              minValue={data.kids}
              extraClass={styles.counter}
              titleExtraClass={styles.counterTitle}
            />
          </li>
        </ul>
      </div>
    </li>
  );
}

export default CheckoutCard;
