"use client";
import styles from "./main-page.module.scss";
import Header from "@/components/header/header";
import {
  LearnMoreSection,
  ComboPackagesSection,
  CardWithImageSliderSection,
  GuideSection,
  CardWithPriceSliderSection,
  StepsSection,
  SearchSection,
  ButtonsSliderSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";

interface Props {
  data?: any;
}

function MainPage({ data }: Props) {
  // console.log(data,"---main")
  const { Categories, Guide } = data;
  return data ? (
    <>
      <Header data={data} />
      <main className={styles.container}>
        <SearchSection data={data} />
        <ButtonsSliderSection
          title=""
          titlePosition="left"
          extraClass={styles.buttonsSlider}
          data={Categories}
        />
        <CardWithPriceSliderSection
          extraClass={styles.cardWithPriceSection}
          data={data}
          cardsApiData={data?.Recommend}
        />
        <CardWithImageSliderSection
          data={data?.Destination}
          extraClass={styles.destinationSection}
          hasButtons={true}
        />
        <ComboPackagesSection data={data} hasButtons={true} />
        <StepsSection data={data} />
        {Guide && (
          <GuideSection
            name={Guide.name}
            description={Guide.description}
            countries={Guide.countries}
          />
        )}
        <LearnMoreSection data={data} />
      </main>
      <Footer data={data} />
    </>
  ) : null;
}


export default MainPage;
