"use client";

import { MouseEventHandler } from "react";
import styles from "./photos-slider.module.scss";
import "./photos-slider.scss";
import Modal from "react-modal";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import RoundArrowButton from "@/components/ui/buttons/round-arrow-button/round-arrow-button";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: {
    [key: string]: string;
  }[];
  isOpen: boolean;
  closePopup?: MouseEventHandler<HTMLElement>;
}

function PhotosSlider({ data, isOpen, closePopup }: Props) {
  const isMobile = useMediaQuery("(max-width:800px)");

  const overlayStyles = {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    boxSizing: "border-box" as "border-box",
    padding: !isMobile ? "110px 130px" : "0",
  };

  const contentStyles = {
    position: "relative" as "relative",
    inset: "0px",
    border: "none",
    background: "transparent",
    overflow: "visible",
    borderRadius: "4px",
    outline: "none",
    padding: "0px",
    width: "100vw",
    cursor: "default",
    boxSizing: "border-box" as "border-box",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closePopup}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
      className={styles.modal}
      ariaHideApp={false}
    >
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          pagination: false,
          arrows: true,
          type: "loop",
        }}
        className={styles.slider}
        id="image-carousel"
      >
        <div className={`splide__arrows ${styles.buttons}`}>
          <button
            className={`splide__arrow splide__arrow--prev ${styles.button} ${styles.buttonLeft}`}
          >
            <RoundArrowButton direction="right" />
          </button>

          {
            <button
              className={`splide__arrow splide__arrow--next ${styles.button} ${styles.buttonRight}`}
            >
              <RoundArrowButton direction="right" />
            </button>
          }
        </div>
        <SplideTrack className="photosSlider">
          {data?.map((el: any, index: number) => {
            const { url, photoReviewUrl } = el;
            return (
              <SplideSlide key={index}>
                <div className={`${styles.imageContainer} imageContainer`}>
                  <img
                    className={styles.image}
                    src={url ? url : photoReviewUrl}
                    alt={"tour photo"}
                    // width={1660}
                    // height={923}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </Modal>
  );
}

export default PhotosSlider;
