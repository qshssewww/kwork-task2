"use client";
import styles from "./reviews-section.module.scss";

import SectionTitle from "@/components/ui/section-title/section-title";
import Button from "@/components/ui/buttons/button/button";
import StarRatingProgressBar from "@/components/ui/progress-bars/star-rating-progress-bar/star-rating-progress-bar";
import LinearProgressBar from "@/components/ui/progress-bars/linear-progress-bar/linear-progress-bar";
import FeedbackCard from "@/components/ui/cards/feedback-card/feedback-card";
import { useMediaQuery } from "@mui/material";
import { getCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";
import FeedbackModal from "@/components/modals/feedback-modal/feedback-modal";
// import { feedbackTestData } from "@/utils/data";

interface IFeedback {
  name: string;
  des: string;
  starFeedback: {
    name: string;
  }[];
  inputName: string;
  inputDes: string;
  inputPhoto: string;
  buttonPhoto: string;
  buttonNext: string;
}

interface IFeedbackThank {
  name: string;
  des: string;
  buttonClose: string;
}

interface IStarPoint {
  titleStar: string;
  titlePoints: string;
}

interface IUserReview {
  photoPeople: string;
  name: string;
  starReviews: string;
  description: string;
  photoReview: {
    photoReviewUrl: string;
  }[];
}

interface Props {
  sectionTitle: string;
  sectionTitlePosition?: "left" | "center";
  feedbackButtonContent: string;
  popupData: any;
  ratingData: {
    titleReviews: string;
    buttonReviews: string;
    buttonReviewsWindow: {
      feedback: IFeedback;
      feedbackThank: IFeedbackThank;
    };
    starReviews: string;
    starPoints: IStarPoint[];
  };
  usersReviews: {
    reviewsPeopleTitle: IUserReview[];
    allButton: string;
  };
  showAllButton: string;
  extraClass?: string;
}

function ReviewsSection({
  sectionTitle,
  sectionTitlePosition,
  feedbackButtonContent,
  ratingData,
  showAllButton,
  popupData,
  extraClass,
  usersReviews,
}: Props) {
  // console.log(usersReviews,"--")
  const isXs = useMediaQuery("(max-width:800px)");

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isShowMoreClicked, setShowMoreClicked] = useState<boolean>(false);
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthorized(getCookie("token"));
  }, []);

  return (
    <section className={`${styles.section} ${extraClass}`}>
      <FeedbackModal
        tourId="8"
        isPopupOpen={isPopupOpened}
        closePopup={() => setIsPopupOpened(false)}
        data={popupData}
      />
      <div className={styles.titleContainer}>
        <SectionTitle
          extraClass={styles.title}
          content={sectionTitle}
          position={sectionTitlePosition}
        />
        {isAuthorized && (
          <Button
            onClick={() => setIsPopupOpened(true)}
            extraClass={styles.feedbackButton}
            content={feedbackButtonContent}
          />
        )}
      </div>

      <div className={styles.ratingContainer}>
        <div className={styles.starsContainer}>
          <StarRatingProgressBar
            value={parseFloat(ratingData.starReviews)}
            starsAmount={5}
            size={!isXs ? "50px" : "27px"}
          />
          <p
            className={styles.overallRating}
          >{`${ratingData.starReviews}/5`}</p>
        </div>

        <ul className={styles.progressBarsList}>
          {ratingData.starPoints.map((el: IStarPoint, index: number) => {
            return (
              <li key={index} className={styles.progressBarItem}>
                <p className={styles.progressBarItemTitle}>{el.titleStar}</p>
                <div className={styles.progressBarItemBarContainer}>
                  <LinearProgressBar value={parseFloat(el.titlePoints)} />
                  <p className={styles.progressBarItemRating}>
                    {el.titlePoints}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={styles.reviewsList}>
        {/* {usersReviews.reviewsPeopleTitle.map( */}
        {usersReviews.reviewsPeopleTitle.map((el: IUserReview, index: number) => {
          {
            if (index < 4)
              return (
                <li key={index} className={styles.reviewsItem}>
                  <FeedbackCard
                    name={el.name}
                    photo={el.photoPeople}
                    rate={el.starReviews}
                    photosArray={el.photoReview}
                    description={el.description}
                    showMoreContent={showAllButton}
                  />
                </li>
              );

            if (isShowMoreClicked)
              return (
                <li key={index} className={styles.reviewsItem}>
                  <FeedbackCard
                    name={el.name}
                    photo={el.photoPeople}
                    rate={el.starReviews}
                    photosArray={el.photoReview}
                    description={el.description}
                    showMoreContent={showAllButton}
                  />
                </li>
              );
          }
        })}
      </ul>
      {usersReviews.reviewsPeopleTitle.length > 3 && !isShowMoreClicked && (
        // {usersReviews.reviewsPeopleTitle.length > 1 && !isShowMoreClicked && (
        <Button
          onClick={() => setShowMoreClicked(true)}
          extraClass={styles.button}
          content="Show more"
          background="white"
          contentColor="black"
        />
      )}
    </section>
  );
}

export default ReviewsSection;
