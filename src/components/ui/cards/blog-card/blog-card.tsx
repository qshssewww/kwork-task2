"use client";

import styles from "./blog-card.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";

interface Props {
  date: string;
  description: string;
  image: string;
  name: string;
  tab: { name: string }[];
  url: string;
}

const BlogCard = ({ date, description, image, name, tab, url }: Props) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={url} className={styles.imageContainer}>
        <Image
          width={288}
          height={164}
          className={styles.image}
          src={image}
          alt={name}
        />
      </Link>
      <Link className={styles.title} href={url}>
        <h3>{name}</h3>
      </Link>

      <p className={styles.description}>{description}</p>
      <time className={styles.date}>{date}</time>
    </div>
  );
};

export default BlogCard;
