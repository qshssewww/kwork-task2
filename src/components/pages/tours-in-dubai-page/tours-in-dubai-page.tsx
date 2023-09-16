"use client";

import { NextPage } from "next";
import styles from "./tours-in-dubai-page.module.scss";
import Header from "@/components/header/header";
import {
  ButtonsSection,
  ButtonsSliderSection,
  CardWithImageSliderSection,
  CatalogueSection,
  FAQSection,
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

const ToursInDubaiPage: NextPage<Props> = ({
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
  const { headTitle, Categories, Catalog, Faq, Tag, Destination } = data.Tour;
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
            data={headTitle.bread}
            colorTheme="dark"
            position="center"
          />
        )}

        {Categories && (
          <ButtonsSliderSection
            extraClass={styles.buttons}
            link={`/en/tour/${city}`}
            data={Categories}
            titlePosition="left"
            buttons="right"
          />
        )}

        {Catalog && (
          <CatalogueSection
            extraClass={styles.catalogue}
            params={params}
            data={data}
            title={Catalog.title}
            titlePosition="left"
            setPageNumber={increaseNumber}
            pageNumber={pageNumber}
          />
        )}

        {Destination && (
          <CardWithImageSliderSection
            extraClass={styles.destination}
            data={Destination}
            hasButtons={false}
            link={`/en/tour/`}
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

        {Tag && (
          <ButtonsSection
            extraClass={styles.attractions}
            sectionTitle={Tag.title}
            sectionTitlePosition="left"
            buttonsArr={Tag.nesting}
          />
        )}
      </div>

      <Footer extraClass={styles.footer} data={data} />
    </div>
  );
};

export default ToursInDubaiPage;
