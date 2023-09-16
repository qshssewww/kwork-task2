"use client";

import styles from "./splide-buttons-slider.module.scss";
import "./splide-buttons-slider.scss";
import Button from "../../buttons/button/button";
import ArrowRight from "@/images/logos/icons/arrow-right.svg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import { Ref, SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  buttonArray: {
    sorting: string;
    name: string;
    icon: string;
    url: string;
  }[];
  hasButtons?: boolean;
  buttons?: "both" | "left" | "right";
  propRef?: Ref<HTMLDivElement>;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  link?: string;
  extraClass?: string;
  setState?: React.Dispatch<React.SetStateAction<string | undefined>>;
  color: "white" | "grey" | "darkBlue" | "transparent" | "orange";
}

const SplideButtonsSlider = ({
  buttonArray,
  hasButtons = true,
  buttons = "both",
  extraClass,
  setState,
  link,
  onClick,
  propRef,
  color = "orange",
}: Props) => {
  const [activeButtonState, setActiveButtonState] = useState<string>();
  const setActiveButton = (name: string) => {
    setState && setState(name.toLowerCase());
    setActiveButtonState(name.toLowerCase());
  };
  // useEffect(() => {
  //   buttonArray?.length &&
  //     setActiveButtonState(buttonArray[0]?.name?.toLowerCase());
  // }, []);

  
console.log(buttonArray)
  const click = (e: SyntheticEvent, name: string) => {
    setActiveButton(name);
    onClick && onClick(e);
  };

  return (
    <>
      <div className={`${styles.container} ${extraClass}`} ref={propRef}>
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            gap: "30px",
            type: "slide",
            autoWidth: true,
            pagination: false,
            arrows: hasButtons,
            breakpoints: {
              660: {
                gap: 15,
                perPage: 4,
              },
            },
          }}
          aria-label="My Favorite Images"
          className={styles.slider}
        >
          <SplideTrack className={styles.splideTrack}>
            {buttonArray?.map((el: any, index: number) => {
              const { name, icon, url } = el;
              const loweredName = name?.toLowerCase();
              return (
                <SplideSlide key={index} style={{ transform: "none" }}>
                  {link ? (
                    <div
                      className={styles.link}
                      // href={`${el.url}`}
                    >
                      <Button
                        extraClass={` ${
                          activeButtonState === loweredName &&
                          styles.buttonIsActive
                        }`}
                        content={name}
                        iconUrl={icon}
                        value={loweredName}
                        background={
                          activeButtonState === loweredName ? color : "white"
                        }
                        contentColor={
                          activeButtonState === loweredName ? "white" : "grey"
                        }
                        onClick={(e: SyntheticEvent) => {
                          click(e, loweredName);
                        }}
                      />
                    </div>
                  ) : url ?
                  (
                    <Link
                      className={styles.link}
                      href={`${url}`}
                    >
                      <Button
                        extraClass={` ${
                          activeButtonState === loweredName &&
                          styles.buttonIsActive
                        }`}
                        content={name}
                        iconUrl={icon}
                        value={loweredName}
                        background={
                          activeButtonState === loweredName ? color : "white"
                        }
                        contentColor={
                          activeButtonState === loweredName ? "white" : "grey"
                        }
                        onClick={(e: SyntheticEvent) => {
                          click(e, loweredName);
                        }}
                      />
                    </Link>
                    
                  ) 
                  :
                   (
                    <Button
                        extraClass={` ${
                          activeButtonState === loweredName &&
                          styles.buttonIsActive
                        }`}
                        content={name}
                        iconUrl={icon}
                        value={loweredName}
                        background={
                          activeButtonState === loweredName ? color : "white"
                        }
                        contentColor={
                          activeButtonState === loweredName ? "white" : "grey"
                        }
                        onClick={(e: SyntheticEvent) => {
                          click(e, loweredName);
                        }}
                      />
                  )}
                </SplideSlide>
              );
            })}
          </SplideTrack>
          {hasButtons && (
            <div className="splide__arrows">
              <button
                className={`splide__arrow splide__arrow--prev ${
                  styles.button
                } ${styles.buttonLeft} ${buttons === "right" && "disable"}`}
                style={{ display: "none" }}
              >
                <div
                  className={`${styles.arrowButton} ${styles.arrowButtonLeft}`}
                >
                  <ArrowRight className={styles.arrowImg} />
                </div>
              </button>

              {
                <button
                  className={`splide__arrow splide__arrow--next ${
                    styles.button
                  } ${styles.buttonRight} ${buttons === "left" && "disable"}`}
                >
                  <div className={styles.arrowButton}>
                    <ArrowRight className={styles.arrowImg} />
                  </div>
                </button>
              }
            </div>
          )}
        </Splide>
      </div>
    </>
  );
};

export default SplideButtonsSlider;
