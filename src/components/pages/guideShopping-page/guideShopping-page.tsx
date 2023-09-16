"use client";
import React, { useState, useEffect } from "react";
import styles from "./guideShopping-page.module.scss";
import Header from "@/components/header/header";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import { getGuidShopping } from "@/utils/fetches";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/redux-hooks";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import Footer from "@/components/footer/footer";
import { Link } from "@mui/material";

function GuideShopping({ requestData }: any) {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname.split("/")[2]);
  const [data, setData]: any = useState(requestData);
  const dispatch = useAppDispatch();

  function getCity(city: any, shopping: any) {
    return function (dispatch: any) {
      getGuidShopping(city, shopping)
        .then((res: any) => {
          if (res) {
            setData(res);
          } else {
            null;
          }
        })
        .catch(() => router.push('/en/error404'));
    };
  }
  useEffect(() => {
    window.screen.width <= 800 ? setIsMobile(true) : setIsMobile(false);
    dispatch(getCity(pathname.split("/")[3], pathname.split("/").pop()));
  }, []);
  // console.log(data,"--shop dark")
  return (
    <div className={styles.page}>
      <Header data={data} />
      <h1 className={styles.title}>{data?.GuideAll?.headTitle?.title}</h1>
      <p className={styles.bread}>
        <Link className={styles.linkBread} href={"/"}>
          {data.GuideAll.headTitle.bread[0].name}
        </Link>{" "}
        {`>`}{" "}
        <Link className={styles.linkBread} href={`/${pathname.split("/")[1]}/guide/`}>
          {data.GuideAll.headTitle.bread[1].name}
        </Link>{" "}
        {`>`}{" "}
        <Link className={styles.linkBread} href={`/${pathname.split("/")[1]}/guide//${pathname.split("/")[3]}`}>
          {data.GuideAll.headTitle.bread[2].name}
        </Link>{" "}
        {`>`}{" "}
        <span
          className={styles.linkBread}
          // href={`/guide/${pathname.split("/")[2]}/`}
        >
          {data.GuideAll.headTitle.bread[3].name}
        </span>
      </p>
      <ul className={styles.cardContainer}>
        {data
          ? data.GuideAll.GuideDetal.productGuide.map((el: any, index: number) => {
              return (
                <CardWhite
                  key={index}
                  image={el.photo}
                  title={el.name}
                  content={el.desc}
                  url={el.url}
                />
              );
            })
          : null}
      </ul>
      <button
        onClick={() => router.push(`${data.GuideAll.GuideDetal.button?.url}`)}
        className={styles.button}
      >
        <p className={styles.buttonText}>
          {data.GuideAll.GuideDetal.button.name}
        </p>
      </button>
      <div className={styles.places}>
        <h4 className={styles.placesTitle}>{data.GuideAll.Guide.name}</h4>
        {!isMobile ? (
          <div className={styles.cardsContainer}>
            {data
              ? data.GuideAll.Guide.product.map((el: any, index: number) => {
                  return (
                    <CardWithImage
                      key={index}
                      like="none"
                      cardExtraClass={styles.card}
                      image={el.photo}
                      title={el.name}
                      content={el.desc}
                      path={el?.url}
                    />
                  );
                })
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
                ? data.GuideAll.Guide.product.map((el: any, index: number) => {
                    return (
                      <SplideSlide key={index} className={styles.splideSlide}>
                        <CardWithImage
                          image={el.photo}
                          cardExtraClass={styles.cardExtraClass}
                          like="none"
                          title={el.name}
                          content={el.desc}
                          path={el?.url}
                        />
                      </SplideSlide>
                    );
                  })
                : null}
            </SplideTrack>
          </Splide>
        )}
      </div>
      <Footer data={data} />
    </div>
  );
}

export default GuideShopping;
