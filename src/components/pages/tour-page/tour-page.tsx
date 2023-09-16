"use client";

import { NextPage } from "next";
import styles from "./tour-page.module.scss";
import Header from "@/components/header/header";
import {
  CardWithImageSliderSection,
  CatalogueSection,
  FAQSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";
import PageTitle from "@/components/ui/page-title/page-title";
import RoutePath from "@/components/ui/route-path/route-path";
import { useEffect, useState } from "react";
import DotsLoader from "@/components/ui/loader/loader";
import { IGetTourData } from "@/utils/types";

interface Props {
  data: any;
  params: IGetTourData;
  extraClass?: string;
}

const TourPage: NextPage<Props> = ({ data, extraClass, params }: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const increaseNumber = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    setPageNumber(params.pageNumber);
  }, []);

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
        {data?.Tour?.headTitle && (
          <PageTitle
            extraClass={styles.title}
            content={data.Tour.headTitle.title}
          />
        )}

        {data?.Tour?.headTitle && (
          <RoutePath
            extraClass={styles.routePath}
            data={data.Tour.headTitle.bread}
            colorTheme="dark"
            position="center"
          />
        )}

        {data?.Tour?.Destination && (
          <CardWithImageSliderSection
            extraClass={styles.destination}
            data={data.Tour.Destination}
            hasButtons={false}
            link={`/en/tour/`}
          />
        )}
        {data?.Tour?.Catalog && (
          <CatalogueSection
            params={params}
            extraClass={styles.catalogue}
            data={data}
            title={data.Tour.Catalog.title}
            titlePosition="left"
            setPageNumber={increaseNumber}
            pageNumber={pageNumber}
          />
        )}
        {data?.Tour?.Faq && (
          <FAQSection
            extraClass={styles.faq}
            sectionTitle={data.Tour.Faq.titleFaq}
            titlePosition="center"
            data={data.Tour.Faq.event}
          />
        )}
      </div>
      <Footer extraClass={styles.footer} data={data} />
    </div>
  );
};

export default TourPage;
