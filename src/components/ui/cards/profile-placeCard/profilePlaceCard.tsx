import React from 'react';
import styles from "./profilePlaceCard.module.scss";

interface Props {
    status:  "New order" | "paid";
    title: string;
    date: string;
    peoples: string;
    lastPrice: string;
    mainPrice: string;
  }

function ProfilePlaceCard({title, status, date, peoples, lastPrice, mainPrice }: Props) {


    return (
        <li className={styles.container}>
            <div className={styles.contentContainer}>
            <div className={status == 'New order' ? styles.status_new :  styles.status_paid}>
                <p className={styles.statusText}>{status == 'New order' ? `New order` : `Order has been paid`}</p>
            </div>
            <p className={styles.value}>{title}</p>
            <div className={styles.dateContainer}>
                <p className={styles.point}>Date and Time</p>
                <p className={styles.value}>{date}</p>
            </div>
            <div className={styles.peoplesContainer}>
                <p className={styles.point}>People</p>
                <p className={styles.value}>{peoples}</p>
            </div>
            <div className={styles.priceContainer}>
            <p className={styles.lastPrice}>{lastPrice}</p>
            <p className={styles.secondPrice}>
              {mainPrice} <span className={styles.priceSpan}>price</span>
            </p>
          </div>
          <button className={styles.cancelButton}><p className={styles.cancelButtonText}>Cancel</p></button>
          </div>
        </li>
    );
}

export default ProfilePlaceCard;