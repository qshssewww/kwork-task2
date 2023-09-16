import styles from "./learn-more-section.module.scss";
import SplideSlider from "../../ui/splide/splide-slider/splide-slider";

interface Props {
  data: any;
}
function LearnMoreSection({ data }: Props) {
  const descriptionApiData = data?.Description;
  return descriptionApiData ? (
    <section className={styles.main}>
      <SplideSlider array={descriptionApiData}></SplideSlider>
    </section>
  ) : null;
}

export default LearnMoreSection;
