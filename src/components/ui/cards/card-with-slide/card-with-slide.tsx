'use client'
import styles from "./card-with-slide.module.scss";

interface IProps {
  title: string;
  subtitle: string;
  image: string;
}

function CardWithSlide({ title, subtitle, image }: IProps) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>
          {subtitle}
          {/* {"... "} */}
          {/* <span className={styles.link}>read more</span> */}
        </p>
      </div>
    </div>
  );
}

export default CardWithSlide;
