import styles from "./catalogue-section.module.scss";
import { NextPage } from "next";
import SectionTitle from "@/components/ui/section-title/section-title";
import LazyLoadCards from "../../ui/lazy-load-cards/lazy-load-cards";
import { SyntheticEvent } from "react";
import { IGetTourData } from "@/utils/types";

interface Props {
  data: any;
  title: string;
  titlePosition?: "center" | "left";
  extraClass?: string;
  setPageNumber: (() => void) | ((e: SyntheticEvent) => void);
  pageNumber: number;
  params: IGetTourData;
}

const CatalogueSection: NextPage<Props> = ({
  data,
  title,
  titlePosition,
  extraClass,
  setPageNumber,
  pageNumber,
  params,
}) => {
  return data ? (
    <section className={`${styles.section} ${extraClass}`}>
      <SectionTitle content={title} position={titlePosition} />
      <LazyLoadCards
        params={params}
        allData={data}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </section>
  ) : null;
};

export default CatalogueSection;
