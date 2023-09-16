"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lazy-load-cards.module.scss";
import { getTourData } from "@/utils/fetches";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import DotsLoader from "@/components/ui/loader/loader";
import { IGetTourData } from "@/utils/types";

interface Props {
  allData: any;
  setPageNumber: any;
  pageNumber: number;
  params: IGetTourData;
}

function LazyLoadCards({ allData, setPageNumber, pageNumber, params }: Props) {
  const [cardsData, setCardsData] = useState<any>([]);
  const [additionalCardsData, setAdditionalCardsData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  // console.log(allData,"---")
  const observerTarget = useRef(null);
  const likeIcon = allData?.Оther?.heartall;
  const stylesApiData = allData?.Styles;
  const { marksColor } = stylesApiData;
  useEffect(() => {
    setCardsData(allData.Tour.Catalog.product);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget.current]);

  useEffect(() => {
    if (pageNumber === 1 || pageNumber < 1) return;
    var requestData = null
    setLoading(true);
    getTourData(requestData, { ...params, pageNumber: pageNumber} )
      .then((res) => {
        setAdditionalCardsData(res?.Tour?.Catalog?.product);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log("error"));
  }, [pageNumber]);

  useEffect(() => {
    additionalCardsData.length &&
      setCardsData(cardsData.concat(additionalCardsData));
    setAdditionalCardsData([]);
    return;
  }, [[...additionalCardsData].length, [...cardsData].length]);
  return (
    <>
      <ul className={styles.cardsContainer}>
        {cardsData.length &&
          cardsData.map((el: any, index: number) => {
            return (
              <CardWithImage
                key={index}
                title={el.name}
                currentPrice={el.price}
                lastPrice={el.oldprice}
                star={el.staricon}
                likeTransparent={el.hearticon}
                like={likeIcon}
                push={el}
                path={el?.url}
                rating={el.startext}
                image={el?.photo}
                content={el.desc}
                label={el?.mark ? el?.mark[0].name : false}
                labelStyle={marksColor && marksColor}
              />
            );
          })}
      </ul>
      <div ref={observerTarget}></div>
      {isLoading && <DotsLoader />}
    </>
  );
}

export default LazyLoadCards;

