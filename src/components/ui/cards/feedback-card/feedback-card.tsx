"use client";

import Image from "next/image";
import styles from "./feedback-card.module.scss";
import StarRatingProgressBar from "@/components/ui/progress-bars/star-rating-progress-bar/star-rating-progress-bar";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import PhotosSlider from "@/components/modals/photos-slider/photos-slider";

interface Props {
  photo: string;
  name: string;
  rate: string;
  description: string;
  photosArray: { photoReviewUrl: string }[];
  showMoreContent: string;
}

function FeedbackCard({
  photo,
  name,
  rate,
  description,
  photosArray,
  showMoreContent,
}: Props) {
  const content = useRef<HTMLParagraphElement>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [isFeedbackPhotoModalOpened, setIsFeedbackPhotoModalOpened] =
    useState<boolean>(false);
  const [clickedFeedbackPhotoId, setClickedFeedbackPhotoId] =
    useState<number>(0);

  useEffect(() => {
    content.current && setContentHeight(content.current?.offsetHeight);
  }, [content.current]);

  useEffect(() => {
    setIsOverflow(contentHeight > 52);
  }, [contentHeight]);

  const reviewContentClassName = useMemo(() => {
    return clsx(styles.reviewContent, {
      [styles?.[`reviewContent_height_overflow`]]: isOverflow && !isOpened,
    });
  }, [isOverflow, isOpened]);

  const feedbackPhotosArray = useMemo(() => {
    if (!clickedFeedbackPhotoId) return photosArray;
    const slicedPart = photosArray?.slice(0, clickedFeedbackPhotoId);
    return photosArray.slice(clickedFeedbackPhotoId).concat(slicedPart);
  }, [clickedFeedbackPhotoId]);

  return (
    <div className={styles.container}>
      <PhotosSlider
        data={feedbackPhotosArray}
        isOpen={isFeedbackPhotoModalOpened}
        closePopup={() => setIsFeedbackPhotoModalOpened(false)}
      />
      <div className={styles.userDataContainer}>
        <Image
          className={styles.photo}
          src={photo}
          alt="user's photo"
          width={68}
          height={68}
        />
        <div className={styles.nameAndRatingContainer}>
          <p className={styles.userName}>{name}</p>
          <StarRatingProgressBar value={parseFloat(rate)} starsAmount={5} />
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <p className={reviewContentClassName} ref={content}>
          {description}
        </p>
        {isOverflow && !isOpened && (
          <button
            className={styles.showMoreButton}
            onClick={() => setIsOpened(true)}
          >
            {showMoreContent}
          </button>
        )}
      </div>
      <ul className={styles.photosList}>
        {[...photosArray].splice(0, 5).map((photo: any, index: number) => {
          return (
            <li
              key={index}
              className={styles.photosItem}
              onClick={() => {
                setClickedFeedbackPhotoId(index);
                setIsFeedbackPhotoModalOpened(true);
              }}
            >
              <img
                className={styles.reviewPhoto}
                src={photo?.photoReviewUrl}
                alt="user's photo"
                width={81}
                height={81}
              />
              {index === 4 && (
                <p
                  className={styles.photosNumber}
                >{`+${photosArray.length}`}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeedbackCard;
