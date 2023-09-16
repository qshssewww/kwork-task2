"use client";
import { FC, useEffect } from "react";
import styles from "./blog-details.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import Image from "next/image";
import BlogCard from "@/components/ui/cards/blog-card/blog-card";
import dynamic from "next/dynamic";

const ProductSlider = dynamic(() => import("./product-slider"), { ssr: false });

interface Props {
  data: any;
}

const BlogDetails: FC<Props> = ({ data: data }) => {
  const likeIcon = data?.Оther?.heartall;

  return (
    <div>
      <Header data={data} colorTheme="light" />
      <main className={`${styles.section} ${styles.container}`}>
        <div className={styles.contentContainer}>
          {data.Blog.photo && (
            <div className={`${styles.imageContainer} ${styles.mobileImage}`}>
              <Image
                layout="fill"
                className={styles.image}
                src={data.Blog.photo}
                alt="Company image"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          {data?.Bread && <RoutePath data={data?.Bread} colorTheme="grey" />}
          <h1 className={styles.title}>{data.Blog.name}</h1>
          <time className={styles.date}>{data.Blog.date}</time>
          {data.Blog.photo && (
            <div className={`${styles.imageContainer} ${styles.desktopImage}`}>
              <Image
                layout="fill"
                className={styles.image}
                src={data.Blog.photo}
                alt="Company image"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          {data.Blog.description && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.Blog.description }}
            />
          )}
          {data.Blog.videoOne && (
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src={data.Blog.videoOne}
                title="Roasting Linus&#39; $100 Million YouTube Studio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {data.Blog.nameOne && (
            <h3 className={styles.subTitle}>{data.Blog.nameOne}</h3>
          )}
          {data.Blog.descriptionOne && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.Blog.descriptionOne }}
            />
          )}
          {data.Blog.photoTwo && (
            <div className={styles.imageContainer}>
              <Image
                layout="fill"
                className={styles.image}
                src={data.Blog.photoTwo}
                style={{ objectFit: "cover" }}
                alt="Company image"
              />
            </div>
          )}
          {data.Blog.nameTwo && (
            <h3 className={styles.subTitle}>{data.Blog.nameTwo}</h3>
          )}
          {data.Blog.descriptionTwo && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.Blog.descriptionTwo }}
            />
          )}
          {data.Blog.product && (
            <ProductSlider products={data?.Blog.product} likeIcon={likeIcon} />
          )}

          {/* <SplideMultipleSlider
            cardArray={[
              ...data?.Blog.product,
              ...data?.Blog.product,
              ...data?.Blog.product,
              ...data?.Blog.product,
            ]}
            cardExtraClass={`${styles.card} ${styles.mobileSlider}`}
            like={likeIcon}
            hasButtons={false}
          />
          <ul className={styles.productsList}>
            {data?.Blog.product?.map((el: any, index: number) => {
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
          </ul> */}
          {data.Blog.descriptionThree && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.Blog.descriptionThree }}
            />
          )}
          {data.recomendBlog.name && (
            <h3 className={styles.subTitle}>{data.recomendBlog.name}</h3>
          )}
          {data.recomendBlog.blogProduct && (
            <div className={styles.productList}>
              {data.recomendBlog.blogProduct.length
                ? data.recomendBlog.blogProduct.map(
                    (el: any, index: number) => {
                      return (
                        <BlogCard
                          key={index}
                          name={el.name}
                          image={el?.image}
                          description={el.description}
                          tab={el?.tab}
                          date={el?.date}
                          url={el?.url}
                        />
                      );
                    }
                  )
                : "Nothing found!"}
            </div>
          )}
        </div>
      </main>

      <Footer data={data} />
    </div>
  );
};

export default BlogDetails;
