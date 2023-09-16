"use client";

import styles from "./tour-short-description-section.module.scss";
import RoutePath from "@/components/ui/route-path/route-path";
import SectionTitle from "@/components/ui/section-title/section-title";
import StarRatingProgressBar from "@/components/ui/progress-bars/star-rating-progress-bar/star-rating-progress-bar";
import Button from "@/components/ui/buttons/button/button";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: any;
  extraClass?: string;
}

function TourShortDescriptionSection({ data, extraClass }: Props) {
  const routePathData = data?.Tour?.Bread;
  const HeadDetal = data.Tour.Detal.HeadDetal;
  const isMobile = useMediaQuery("(max-width:800px)");
  // console.log(data,"---headDetal")
  return (
    <section className={`${styles.section} ${extraClass}`}>
      <div className={styles.contentContainer}>
        <div className={styles.mainInfoTourContainer}>
          <RoutePath data={routePathData} colorTheme="grey" />
          <SectionTitle
            extraClass={styles.title}
            content={HeadDetal?.name}
            position="left"
          />
          <div className={styles.ratingInfoContainer}>
            <p className={styles.ratingInfoContent}>{HeadDetal?.review}</p>
            <div className={styles.starRatingContainer}>
              <StarRatingProgressBar
                starsAmount={!isMobile ? 5 : 1}
                size={!isMobile ? "22px" : "16px"}
                value={parseFloat(HeadDetal?.star)}
              />
              <p className={styles.ratingInfoContent}>{HeadDetal?.star} </p>
            </div>
            <p className={styles.ratingInfoContent}>{HeadDetal?.id}</p>
          </div>
        </div>
        <Button
          extraClass={`${styles.button} ${styles.wishlistButton}`}
          content={HeadDetal?.wishlist.name}
          iconUrl={HeadDetal?.wishlist.icon}
          contentColor="grey"
          background="white"
          IconWidth={24}
          IconHeight={24}
        />
      </div>
    </section>
  );
}

export default TourShortDescriptionSection;
