import { NextPage } from "next";
import styles from "./company-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import Image from "next/image";
import { FC } from "react";

interface Props {
  data: any;
}

const CompanyPage: FC<Props> = ({ data: data }) => {
  console.log(data.Company.description);
  return (
    <div>
      <Header data={data} colorTheme="light" />
      <main>
        <div className={`${styles.section} ${styles.container}`}>
          <div className={styles.imageContainer}>
            <Image
              layout="fill"
              className={styles.image}
              src={data.Company.imageOne}
              alt="Company image"
            />
          </div>
          {data?.Company.bread && (
            <RoutePath data={data?.Company.bread} colorTheme="grey" />
          )}
          <h1 className={styles.title}>{data.Company.name}</h1>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.Company.description }}
          />
          <div className={styles.advantageContainer}>
            {data.Company.privateStar.map((advantage:any) => (
              <div className={styles.advantageItem}>
                <div className={styles.advantageItemName}>
                  {advantage.name}+
                </div>
                <div className={styles.advantageItemDesc}>
                  {advantage.description}
                </div>
              </div>
            ))}
          </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.Company.descriptionOne }}
          />
          <div className={styles.imageContainer}>
            <Image
              layout="fill"
              className={styles.image}
              src={data.Company.image}
              alt="Company image"
            />
          </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.Company.descriptionTwo }}
          />
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default CompanyPage;
