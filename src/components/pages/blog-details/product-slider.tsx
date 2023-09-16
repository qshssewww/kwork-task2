import { FC } from "react";
import styles from "./blog-details.module.scss";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import Link from "next/link";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";

interface Props {
  products: any;
  likeIcon: any;
}

export const ProductSlider: FC<Props> = ({ products, likeIcon }) => {
  return (
    <div>
      <div className={`${styles.mobileSlider}`}>
        <SplideMultipleSlider
          cardArray={[...products, ...products, ...products, ...products]}
          cardExtraClass={`${styles.card}`}
          like={likeIcon}
          hasButtons={false}
        />
      </div>

      <ul className={styles.productsList}>
        {products?.map((el: any, index: number) => {
          return (
            <li className={styles.productsListItem} key={index}>
              <Link className={styles.link} href={`/`}>
                <CardWithImage
                  title={el?.name && el?.name}
                  image={el?.photo}
                  cardExtraClass={styles.card}
                  label={el?.mark ? el?.mark[0]?.name : "label"}
                  likeTransparent={el?.hearticon}
                  like={likeIcon}
                  push={el}
                  star={el?.staricon && el?.staricon}
                  rating={el?.startext && el.startext}
                  content={el?.description ? el.description : el?.desc}
                  lastPrice={el?.oldprice && el.oldprice}
                  currentPrice={el?.price && el.price}
                  imgType="square"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSlider;
