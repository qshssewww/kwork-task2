"use client";

import { NextPage } from "next";
import styles from "./theme-parks-page.module.scss";
import Header from "@/components/header/header";
import {
  ButtonsSliderSection,
  CardWithPriceSliderSection,
  CatalogueSection,
  FAQSection,
  GuideSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";
import PageTitle from "@/components/ui/page-title/page-title";
import RoutePath from "@/components/ui/route-path/route-path";
import { useEffect, useState } from "react";
import { IGetTourData } from "@/utils/types";

interface Props {
  data: any;
  extraClass?: string;
  city: string;
  params: IGetTourData;
}

const ThemeParksPage: NextPage<Props> = ({
  extraClass,
  city,
  data,
  params,
}: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const increaseNumber = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    setPageNumber(params.pageNumber);
  }, []);

  const { headTitle, Categories, Popular, Catalog, Faq, Guide } = data.Tour;

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <Header
        extraClass={styles.header}
        data={data}
        searchSectionSize="fixed"
        colorTheme="light"
        position="block"
      />

      <div className={styles.main}>
        {headTitle && (
          <PageTitle extraClass={styles.title} content={headTitle.title} />
        )}
        {headTitle && (
          <RoutePath
            extraClass={styles.routePath}
            data={headTitle?.bread}
            colorTheme="dark"
            position="center"
          />
        )}
        {Categories && (
          <ButtonsSliderSection
            extraClass={styles.buttons}
            link={`/en/tour/${city}/`}
            data={Categories}
            titlePosition="left"
            buttons="right"
          />
        )}
        {Popular && (
          <CardWithPriceSliderSection
            extraClass={styles.popular}
            data={data}
            cardsApiData={Popular}
            titlePosition="left"
            hasButtons={false}
          />
        )}
        {Catalog && (
          <CatalogueSection
            extraClass={styles.catalogue}
            data={data}
            title={Catalog.title}
            titlePosition="left"
            setPageNumber={increaseNumber}
            pageNumber={pageNumber}
            params={params}
          />
        )}
        {Faq && (
          <FAQSection
            extraClass={styles.faq}
            sectionTitle={Faq.titleFaq}
            titlePosition="center"
            data={Faq.event}
          />
        )}
        {Guide && (
          <GuideSection
            extraClass={styles.guide}
            name={Guide.name}
            products={Guide.product}
          />
        )}
      </div>
      <Footer extraClass={styles.footer} data={data} />
    </div>
  );
};

export default ThemeParksPage;
