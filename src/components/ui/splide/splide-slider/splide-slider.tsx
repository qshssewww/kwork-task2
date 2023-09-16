'use client'

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styles from "./splide-slider.module.scss";
import CardWithSlide from "../../cards/card-with-slide/card-with-slide";

export interface IProps {
  array: { title: string; content: string; image: string }[];
}

function SplideSlider({ array }: any) {
  return (
    <>
      <div className={styles.container}>
        <Splide
          hasTrack={false}
          options={{
            gap: 30,
            rewind: true,
            type: "slide",
            pagination: true,
            arrows: false,
          }}
          aria-label="My Favorite Images"
          className={styles.slider}
        >
          <SplideTrack>
            {array?.map((el: any, index: number) => {
              return (
                <SplideSlide key={index} style={{display: 'flex', justifyContent: "center"}}>
                  <CardWithSlide
                    title={el.name}
                    subtitle={el.desc}
                    image={el.photo}
                  />
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <ul className={`${styles.pagination} splide__pagination`}></ul>
        </Splide>
      </div>
    </>
  );
}

export default SplideSlider;
