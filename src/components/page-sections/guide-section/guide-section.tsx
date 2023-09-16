"use client";

import styles from "./guide-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "@/components/ui/section-title/section-title";
import { useMediaQuery } from "@mui/material";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";

interface IBasicProps {
  titlePosition?: "left" | "center";
  name: string;
  description?: string;
  extraClass?: string;
}

interface ICountriesObj {
  type: string;
  name: string;
  product: [
    {
      name: string;
      desc: string;
      photo: string;
      url: string;
    }[]
  ];
}

interface IProduct {
  name: string;
  desc: string;
  photo: string;
  url: string;
}

type ConditionalProps =
  | { products?: IProduct[]; countries?: never }
  | { countries?: ICountriesObj[]; products?: never };

type combinedProps = IBasicProps & ConditionalProps;

function GuideSection({
  titlePosition,
  countries,
  products,
  name,
  description,
  extraClass,
}: combinedProps) {
  const [buttonState, setButtonState] = useState<string>();
  const isMobile = useMediaQuery("(max-width:810px)");

  useEffect(() => {
    countries && setButtonState(countries[0]?.name);
  }, [countries, setButtonState]);

  const guideCardsData = useMemo(() => {
    return countries?.filter(
      (el: any) => el.name.toLowerCase() === buttonState?.toLowerCase()
    )[0];
  }, [countries, buttonState]);

  const cardsArrayData = useMemo(() => {
    return guideCardsData ? guideCardsData?.product : products;
  }, [guideCardsData]);

  return (
    <section className={`${styles.main} ${extraClass}`}>
      <div className={styles.container}>
        <SectionTitle content={name} position={titlePosition} />
        <p className={styles.text}>{description}</p>
        {countries && (
          <ul className={styles.tourContainer}>
            {countries?.map((el: any, index: number) => {
              return (
                <li key={index}>
                  <button
                    className={`${styles.tourText} ${
                      buttonState === el.name && styles.tourTextActive
                    }`}
                    onClick={() => {
                      setButtonState(el.name);
                    }}
                  >
                    {el.name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <ul className={styles.cardsContainer}>
          {!isMobile ? (
            cardsArrayData?.map((el: any, index: number) => {
              return (
                <li className={styles.cardListItem} key={index}>
                  <CardWithImage
                    title={el.name}
                    push={el}
                    path={el?.url}
                    image={el.photo}
                    content={el.description}
                    imgType="cover"
                    cardExtraClass={styles.card}
                    label="none"
                    like="none"
                  />
                </li>
              );
            })
          ) : (
            <SplideMultipleSlider
              cardArray={guideCardsData ? guideCardsData?.product : products}
              cardExtraClass={styles.cardExtraClass}
              like="none"
              label="none"
              cardImageType="cover"
            />
          )}
        </ul>
      </div>
    </section>
  );
}

export default GuideSection;
