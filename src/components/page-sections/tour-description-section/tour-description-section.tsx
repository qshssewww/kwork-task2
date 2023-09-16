"use client";

import styles from "./tour-description-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import Image from "next/image";
import GoogleMap from "@/components/ui/map/map";
import MapMarker from "@/components/ui/map-marker/map-marker";
import MapTimeline from "@/components/ui/map-timeline/map-timeline";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: any;
  extraClass?: string;
}

function TourDescriptionSection({ data, extraClass }: Props) {
  // console.log(data,"----pap")
  const tourDetailData = data?.Tour;
  const isMobile = useMediaQuery("(max-width:800px)");

  const descriptionText = useRef<HTMLParagraphElement>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    descriptionText.current &&
      setContentHeight(descriptionText.current?.offsetHeight);
  }, [descriptionText.current]);

  useEffect(() => {
    setIsOverflow(contentHeight >= (!isMobile ? 112.5 : 59));
  }, [contentHeight]);

  const descriptionTextClassName = useMemo(() => {
    return clsx(styles.descriptionText, {
      [styles?.[`descriptionText_height_overflow`]]: isOverflow && !isOpened,
    });
  }, [isOverflow, isOpened]);

  useEffect(() => {
    descriptionText.current &&
      setContentHeight(descriptionText.current?.offsetHeight);
    // console.log(descriptionText.current);
  }, [descriptionText.current]);

  useEffect(() => {
    setIsOverflow(contentHeight > 112.5);
  }, [contentHeight]);

  const { Description, Advantages, Included, NotInclude, Warnings, Map } =
    tourDetailData;
    // console.log(Map,"---map");
  return (
    <section className={`${styles.section} ${extraClass}`}>
      <p className={styles.descriptionText}>{Description?.smalDescription} </p>
      <div className={styles.buttonsContainer}>
        {Advantages.map((el: any, index: number) => {
          return (
            <Button
              extraClass={styles.label}
              key={index}
              content={el.property}
              spanContent={el.propertyText}
              iconUrl={el.icon}
              background="white"
              contentColor="darkBlue"
            />
          );
        })}
      </div>
      <div className={styles.tourDescriptionContainer}>
        <div className={styles.tourDescription}>
          <h3 className={styles.descriptionTitle}>
            {Description.titleDescription}
          </h3>
          <div className={styles.descriptionContainer}>
            <p className={descriptionTextClassName} ref={descriptionText}>
              {Description?.smalDescription}
            </p>
            {!isOpened && Description?.smalDescription.length > 50  && (
              <button
                className={styles.showMoreButton}
                onClick={() => setIsOpened(true)}
              >
                read more...
              </button>
            )}
          </div>
        </div>
        <div className={styles.tourCharacteristics}>
          <h3 className={styles.descriptionTitle}>
            <span className={`${styles.span} ${styles.span_color_green}`}>
              {Included.titleGreen}
            </span>{" "}
            {Included.titleBlack}
          </h3>
          <ul className={styles.tourCharacteristicsList}>
            {Included.text.map((el: any, index: number) => {
              return (
                <li key={index} className={styles.tourCharacteristicsItem}>
                  <Image
                    className={styles.tourCharacteristicsImage}
                    src={Included.icon}
                    width={33}
                    height={33}
                    alt={"tour Characteristics Image"}
                  />
                  <p className={styles.tourCharacteristicsText}>{el.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.tourCharacteristics}>
          <h3 className={styles.descriptionTitle}>
            {NotInclude.titleBlack}{" "}
            <span className={`${styles.span} ${styles.span_color_orange}`}>
              {NotInclude.titleOrange}
            </span>
          </h3>
          <ul className={styles.tourCharacteristicsList}>
            {NotInclude.text.map((el: any, index: number) => {
              return (
                <li key={index} className={styles.tourCharacteristicsItem}>
                  <Image
                    className={styles.tourCharacteristicsImage}
                    src={NotInclude.icon}
                    width={33}
                    height={33}
                    alt={"tour Characteristics Image"}
                  />
                  <p className={styles.tourCharacteristicsText}>{el.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.tourCharacteristics}>
          <h3 className={styles.descriptionTitle}>
            <span className={`${styles.span} ${styles.span_color_red}`}>
              {Warnings.titleRed}
            </span>
          </h3>
          <ul className={styles.tourCharacteristicsList}>
            {Warnings.text.map((el: any, index: number) => {
              return (
                <li key={index} className={styles.tourCharacteristicsItem}>
                  <Image
                    className={styles.tourCharacteristicsImage}
                    src={Warnings.icon}
                    width={33}
                    height={33}
                    alt={"tour Characteristics Image"}
                  />
                  <p className={styles.tourCharacteristicsText}>{el.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.locationContainer}>
        <h3 className={styles.descriptionTitle}>Where</h3>
        <div className={styles.mapContainer}>
          <MapTimeline data={Map} />
          <GoogleMap
            zoom={11}
            centerCoordinates={{
              lat: 35.2,
              lng: 43.5,
              // lat: Map[0].position.lat,
              // lng: Map[0].position.lng,
            }}
          >
            {Map.map((el: any, index: number) => {
              return (
                <MapMarker
                  marker={true}
                  key={el.id}
                  // lat={el.position.lat}
                  // lng={el.position.lng}
                  lat={35.2}
                  lng={43.5}
                  innerText={el.id}
                  dataLength={Map.length}
                  index={index}
                />
              );
            })}
          </GoogleMap>
        </div>
      </div>
    </section>
  );
}

export default TourDescriptionSection;
