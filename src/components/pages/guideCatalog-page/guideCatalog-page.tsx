"use client";
import Footer from "@/components/footer/footer";
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/header/header";
import styles from "./guideCatalog-page.module.scss";
import React from "react";
import { CardWithImageSliderSection } from "@/components/page-sections/page-sections";
import GuideCity from "@/components/page-sections/guideCity-section/guideCity";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";

function GuideCatalog({ data }: any) {
  const [isMobile, setIsMobile] = useState(false);
  let guideApiData = data.GuideAll.GuideDetal;
  const [buttonState, setButtonState] = useState<string>();
  const [guideCardsData, setGuideCardsData] = useState(
    guideApiData?.countries?.filter((el: any) => el.name.toLowerCase())[0]
  );
  useEffect(() => {
    window.screen.width <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, [buttonState]);
  useEffect(() => {
    setButtonState(guideApiData?.countries[0]?.name);
  }, [guideApiData]);

  useEffect(() => {
    if (buttonState) {
      setGuideCardsData(
        guideApiData?.countries?.filter(
          (el: any) => el.name.toLowerCase() === buttonState?.toLowerCase()
        )[0]
      );
    }
  }, [buttonState]);

  function targetCity(el: any) {
    setButtonState(el.name);
  }

  return (
    <>
      <Header data={data} />
      <h1 className={styles.title}>{data.GuideAll.headTitle.title}</h1>
      <p className={styles.bread}>
        <Link className={styles.link} href={"/"}>
          {data.GuideAll.headTitle.bread[0].name}
        </Link>{" "}
        {`>`}{" "}
        <Link className={styles.link} href={"/guide"}>
          {data.GuideAll.headTitle.bread[1].name}
        </Link>
      </p>
      <div>
        <div className={styles.sliderFirst}>
          <CardWithImageSliderSection data={data.GuideAll.Destination} hasButtons={false} />
        </div>
        <section className={styles.main}>
          <div className={styles.container}>
            <div className={styles.containerMain}>
              {isMobile ? (
                <Splide
                  id={"slider"}
                  hasTrack={false}
                  options={{
                    rewind: true,
                    gap: "30px",
                    type: "slide",
                    autoWidth: true,
                    pagination: false,
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                  className={styles.slider}
                >
                  <SplideTrack className={styles.splideTrack}>
                    {data.GuideAll.GuideDetal.countries.map(
                      (el: any, index: number) => {
                        return (
                          <SplideSlide
                            key={index}
                            className={styles.splideSlide}
                          >
                            <div key={index}>
                              <button
                                className={`${styles.tourText} ${
                                  buttonState === el.name &&
                                  styles.tourTextActive
                                }`}
                                onClick={() => {
                                  setButtonState(el.name);
                                }}
                              >
                                {el.name}
                              </button>
                            </div>
                          </SplideSlide>
                        );
                      }
                    )}
                  </SplideTrack>
                </Splide>
              ) : (
                <div className={styles.tourContainers}>
                  {data.GuideAll.GuideDetal.countries.map(
                    (el: any, index: number) => {
                      return (
                        <div key={index}>
                          <button
                            className={`${styles.tourText} ${
                              buttonState === el.name && styles.tourTextActive
                            }`}
                            onClick={() => {
                              targetCity(el);
                            }}
                          >
                            {el.name}
                          </button>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
              <ul className={styles.tourContainer}>
                {guideCardsData?.product?.map((el: any, index: number) => {
                  return <GuideCity key={index} cityArray={el} />;
                })}
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.places}>
          <h4 className={styles.placesTitle}>{guideCardsData?.Guide?.name}</h4>
          {!isMobile ? (
            <div className={styles.cardsContainer}>
              {data
                ? guideCardsData?.Guide?.product?.map(
                    (el: any, index: number) => {
                      return (
                        <CardWithImage
                          key={index}
                          like="none"
                          cardExtraClass={styles.card}
                          image={el.photo}
                          title={el.name}
                          path={el?.url}
                          content={el.desc}
                        />
                      );
                    }
                  )
                : null}
            </div>
          ) : (
            <Splide
              id={"slider"}
              hasTrack={false}
              options={{
                rewind: true,
                gap: "30px",
                type: "slide",
                autoWidth: true,
                pagination: false,
                arrows: false,
              }}
              aria-label="My Favorite Images"
              className={styles.slider}
            >
              <SplideTrack className={styles.splideTrack}>
                {data
                  ? guideCardsData?.Guide?.product?.map(
                      (el: any, index: number) => {
                        return (
                          <SplideSlide
                            key={index}
                            className={styles.splideSlide}
                          >
                            <CardWithImage
                              image={el.photo}
                              cardExtraClass={styles.cardExtraClass}
                              like="none"
                              title={el.name}
                              content={el.desc}
                            />
                          </SplideSlide>
                        );
                      }
                    )
                  : null}
              </SplideTrack>
            </Splide>
          )}
        </div>
      </div>
      <Footer data={data} />
    </>
  );
}

export default GuideCatalog;
