"use client";

import { NextPage } from "next";
import styles from "./catalogue-page.module.scss";
import Header from "@/components/header/header";
import {
  ButtonsSliderSection,
  CardWithPriceSliderSection,
  CatalogueSection,
  ComboPackagesSection,
  LearnMoreSection,
  SearchSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";

interface Props {
  data: any;
  extraClass?: string;
}

const CataloguePage: NextPage<Props> = ({ data: data, extraClass }) => {
  const { Categories } = data;

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <Header data={data} searchSectionSize="fixed" />
      <SearchSection data={data} sectionSize="fixed" />
      <ButtonsSliderSection data={Categories} titlePosition="left" />
      <CardWithPriceSliderSection
        data={data}
        cardsApiData={data?.Popular}
        hasButtons={false}
        titlePosition="left"
      />
      {/* <CatalogueSection
        extraClass={styles.catalogue}
        data={data}
        title={data?.Catalog?.title}
        titlePosition="left"
      /> */}
      <ComboPackagesSection
        data={data}
        hasButtons={false}
        titlePosition="left"
      />
      <LearnMoreSection data={data} />
      <Footer data={data} />
    </div>
  );
};

export default CataloguePage;
