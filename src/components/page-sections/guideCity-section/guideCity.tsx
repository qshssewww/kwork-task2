import React,{ useEffect, useMemo, useState } from 'react';
import SectionTitle from "@/components/ui/section-title/section-title";
import styles from "./guideCity.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import CardWhite from "@/components/ui/cards/card-white/card-white";

function GuideCity({cityArray}:any) {
    const [isMobile, setIsMobile] = useState(false);
    // console.log(cityArray)
    useEffect(() => {
      window.screen.width <= 810 ? setIsMobile(true) : setIsMobile(false);
    }, []);
    
    return (
        <section  className={styles.section}>
        <h2 className={styles.title}>{cityArray.name}</h2>
        <p className={styles.text}>{cityArray.desc}</p>
        <ul className={styles.cardsContainer}>
          {!isMobile ? (
            cityArray.productGuide.map((el: any, index: number) => {
              return (
               
                  <CardWhite
                    key={index}
                    title={el.name}
                    image={el.photo}
                    content={el.desc}
                    url={el.url}
                  />
            
              );
            })
          ) : (
            <SplideMultipleSlider
              isCardWhite={true}
              cardArray={cityArray.productGuide}
              cardExtraClass={styles.cardExtraClass}
              hasButtons={false}
              like="none"
              label="none"
              cardImageType="cover"
            ></SplideMultipleSlider>
          )}
        </ul>
        </section>
    );
}

export default GuideCity;