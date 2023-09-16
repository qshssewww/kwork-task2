import styles from "./card-white.module.scss";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  content: string;
  url: string;
}

function CardWhite({ image, title, content, url }: Props) {
  return (
      <Link href={`${url}`}>
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={content} />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
      </Link>
  );
}

export default CardWhite;
