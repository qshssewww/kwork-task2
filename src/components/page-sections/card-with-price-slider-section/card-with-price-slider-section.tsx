import styles from "./card-with-price-slider-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import SectionTitle from "@/components/ui/section-title/section-title";
import Link from "next/link";


interface Props {
  data: any;
  cardsApiData: any;
  hasButtons?: boolean;
  titlePosition?: "center" | "left";
  extraClass?: string;
}

const CardWithPriceSliderSection = ({
  data,
  cardsApiData,
  hasButtons,
  titlePosition,
  extraClass,
}: Props) => {
  // console.log(cardsApiData,"---222");
  const likeIcon = data?.Оther?.heartall;
  return cardsApiData ? (
    <section className={`${styles.section} ${extraClass}`}>
      {cardsApiData?.button?.name ? (
        <div className={styles.titleContainer}>
          <SectionTitle
            content={cardsApiData?.title}
            position={titlePosition}
          />
          <Link href={`${cardsApiData?.button.url}`}>
          <p className={`${styles.view} ${styles.viewTitleContainer}`}>
            {cardsApiData?.button?.name}
          </p>
          </Link>
        </div>
      ) : (
        <SectionTitle content={cardsApiData?.title} position={titlePosition} />
      )}
      <SectionTitle content={cardsApiData?.titleSimilar} position={'left'} />
      <div className={styles.cardsContainer}>
        <SplideMultipleSlider
          cardArray={cardsApiData?.product}
          cardExtraClass={styles.card}
          like={likeIcon}
          hasButtons={hasButtons}
        />
      </div>
    </section>
  ) : null;
};

export default CardWithPriceSliderSection;
