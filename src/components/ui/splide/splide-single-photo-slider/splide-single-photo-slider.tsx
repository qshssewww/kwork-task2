"use client";

import styles from "./splide-single-photo-slider.module.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useState } from "react";
import RoundArrowButton from "../../buttons/round-arrow-button/round-arrow-button";
import LikeIconTransparent from "@/images/logos/icons/heart.svg";
import LikeIconSolid from "@/images/logos/icons/heart-solid.svg";
import PhotosSlider from "@/components/modals/photos-slider/photos-slider";

interface IProps {
  extraClass?: string;
  label?: string;
  like?: string;
  likeTransparent?: string;
  data: any;
}

function SplideSinglePhotoSlider({ extraClass, data }: IProps) {
  const [likeState, setLikeState] = useState(false);

  const setLike = () => {
    setLikeState(!likeState);
  };

  const [isSliderOpened, setIsSliderOpened] = useState<boolean>(false);

  return (
    <>
      <PhotosSlider
        data={data}
        isOpen={isSliderOpened}
        closePopup={() => setIsSliderOpened(false)}
      />
      <section
        className={`${styles.section} ${extraClass}`}
        onClick={() => setIsSliderOpened(true)}
      >
        <div className={styles.likeContainer}>
          <button className={styles.likeButton} onClick={setLike}>
            {!likeState ? (
              <LikeIconTransparent width={30} height={30} />
            ) : (
              <LikeIconSolid width={33} height={33} />
            )}
          </button>
        </div>

        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            type: "slide",
            pagination: true,
          }}
          className={`splide__slide--nested ${styles.slider}`}
        >
          <div className={`splide__arrows ${styles.buttonsContainer}`}>
            <button
              className={`splide__arrow splide__arrow--prev ${styles.button}`}
            >
              <RoundArrowButton direction="right" />
            </button>
            <button
              className={`splide__arrow splide__arrow--next ${styles.button}`}
            >
              <RoundArrowButton direction="right" />
            </button>
          </div>

          <SplideTrack>
            {data.map((el: { url: string }, index: number) => {
              return (
                <SplideSlide key={index} className={styles.splideSlide}>
                  <img className={styles.image} src={el?.url} alt="photo" />
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <ul className={`${styles.pagination} splide__pagination`}></ul>
        </Splide>
      </section>
    </>
  );
}

export default SplideSinglePhotoSlider;
