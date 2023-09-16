"use client";
import React, { useState, useEffect } from "react";
import styles from "./guideDetal-page.module.scss";
import Header from "@/components/header/header";
import Image from "next/image";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Footer from "@/components/footer/footer";
import {useParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {getGuidDetal} from "@/utils/fetches";

function GuideDetal({ data }: any) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    window.screen.width <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  const yy = useParams()
  useEffect(() => {
    getGuidDetal(yy.city, yy.shopping, yy.detal)
  }, [])
  return (
    <>
      <div className={styles.page}>
        <Header data={data} />
        <p className={styles.bread}>
          <Link className={styles.linkBread} href={"/"}>
            {data.Bread[0].name}
          </Link>{" "}
          {`>`}{" "}
          <Link className={styles.linkBread} href={`/${pathname.split("/")[1]}/guide/`}>
            {data.Bread[1].name}
          </Link>{" "}
          {`>`}{" "}
          <Link
            className={styles.linkBread}
            href={`/${pathname.split("/")[1]}/guide/${pathname.split("/")[3]}`}
          >
            {data.Bread[2].name}
          </Link>{" "}
          {`>`}{" "}
          <Link
            className={styles.linkBread}
            href={`/${pathname.split("/")[1]}/guide/${pathname.split("/")[3]}/${pathname.split("/")[4]}`}
          >
            {data.Bread[3].name}
          </Link>{" "}
          {`>`}{" "}
          <span
            className={styles.linkBread}
          >
            {data.Bread[4].name}
          </span>
        </p>
        <h3 className={styles.title}>{data.Blog.name}</h3>
        <p className={styles.date}>{data.Blog.date}</p>
        <div className={styles.imageContainer} style={{ backgroundImage: `url(${data.Blog.photo})` }}>
          {/* <img className={styles.image} src={data.Blog.photo} /> */}
        </div>
        <div className={styles.linkYakorContainer}>
          <p className={styles.stateName}>{data.Blog.State.name}</p>
          <div
            className={styles.linkContainer}
            dangerouslySetInnerHTML={{ __html: data.Blog.State.nameYakor }}
          />
        </div>
        {data.Blog.State.stateTitle.map((el: any, index: any) => {
          return (
            <div key={index}>
              <div
                className={styles.heads}
                dangerouslySetInnerHTML={{ __html: el.Head1 }}
              />
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: el.Description1 }}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.places}>
        <h4 className={styles.placesTitle}>{data.recomendBlog.name}</h4>
        {!isMobile ? (
          <ul className={styles.cardContainer}>
            {data
              ? data.recomendBlog.blogProduct.map((el: any, index: number) => {
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
                ? data.recomendBlog.blogProduct.map(
                    (el: any, index: number) => {
                      return (
                        <SplideSlide key={index} className={styles.splideSlide}>
                          <CardWhite
                            key={index}
                            image={el.photo}
                            title={el.name}
                            content={el.desc}
                            url={el.url}
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
      <Footer data={data} />
    </>
  );
}

export default GuideDetal;
