"use client";

import Image from "next/image";
import styles from "./photos-gallery-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import { useMemo, useState } from "react";
import PhotosSlider from "@/components/modals/photos-slider/photos-slider";

interface Props {
  data: {
    url: string;
  }[];
  extraClass?: string;
  buttonContent: string;
}

function PhotosGallerySection({ data, buttonContent, extraClass }: Props) {
  const [clickedSlideId, setClickedSlideId] = useState<number>(0);
  const [isSliderOpened, setIsSliderOpened] = useState<boolean>(false);

  const sliderPhotoArray = useMemo(() => {
    if (!clickedSlideId) return data;
    const slicedPart = data.slice(0, clickedSlideId);
    return data.slice(clickedSlideId).concat(slicedPart);
  }, [clickedSlideId]);

  return (
    <>
      {sliderPhotoArray?.length && (
        <PhotosSlider
          data={sliderPhotoArray}
          isOpen={isSliderOpened}
          closePopup={() => setIsSliderOpened(false)}
        />
      )}
      <section className={`${styles.section} ${extraClass}`}>
        <div className={styles.contentContainer}>
          <ul className={styles.photosList}>
            {data &&
              [...data]?.splice(0, 3).map((photo: any, index: number) => {
                return (
                  <li
                    key={index}
                    className={styles.photosItem}
                    onClick={(e) => {
                      setIsSliderOpened(true);
                      setClickedSlideId(index);
                    }}
                  >
                    <Image
                      className={styles.photo}
                      src={photo.url}
                      alt={"tour photo"}
                      width={1083}
                      height={602}
                    />

                    {index === 2 && (
                      <Button
                        extraClass={styles.button}
                        content={buttonContent}
                        background="white"
                        border="none"
                        contentColor="black"
                        onClick={(e) => {
                          setIsSliderOpened(true);
                          setClickedSlideId(0);
                        }}
                      />
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default PhotosGallerySection;
