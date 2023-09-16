import styles from "./card-with-step.module.scss";

interface Props {
  image: string;
  title: string;
  content: string;
}

function CardWithStep({ image, title, content }: Props) {
  return (
    <li className={styles.container}>
      <img className={styles.image} src={image} alt={content} />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
    </li>
  );
}

export default CardWithStep;
