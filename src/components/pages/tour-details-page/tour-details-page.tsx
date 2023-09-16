import styles from "./tour-details-page.module.scss";
import { NextPage } from "next";
import Header from "@/components/header/header";
import {
  TourDescriptionSection,
  CardWithPriceSliderSection,
  FAQSection,
  ReviewsSection,
  ButtonsSection,
  PhotosGallerySection,
  TourShortDescriptionSection,
} from "@/components/page-sections/page-sections";
import HelpLinks from "@/components/ui/help-links/help-links";
import ReservationForm from "@/components/ui/forms/reservation-form/reservation-form";
import Footer from "@/components/footer/footer";
import SplideSinglePhotoSlider from "@/components/ui/splide/splide-single-photo-slider/splide-single-photo-slider";
import ReservationHandler from "@/components/modals/reservation-components/reservation-handler/reservation-handler";

interface Props {
  data: any;
}

const TourDetailsPage: NextPage<Props> = ({ data }) => {

  return (
    <div className={styles.page}>
      <ReservationHandler data={data} />
      <Header
        extraClass={styles.header}
        data={data}
        colorTheme="light"
        position="block"
        locationContainer={false}
      />
      {data?.Tour?.Photo?.photoDetal?.length && (
        <SplideSinglePhotoSlider
          extraClass={styles.singlePhotoSlider}
          data={data?.Tour?.Photo?.photoDetal}
        />
      )}
      <div className={styles.main}>
        <TourShortDescriptionSection
          extraClass={styles.tourShortDescription}
          data={data}
        />
        {data?.Tour?.Photo?.photoDetal?.length && (
          <PhotosGallerySection
            extraClass={styles.photosGallery}
            data={data?.Tour?.Photo?.photoDetal}
            buttonContent={data?.Tour?.Photo?.buttonPhoto}
          />
        )}
        <ReservationForm
          data={data?.Tour?.BlockReserve}
          extraClass={styles.reservationForm}
        />
        <HelpLinks
          extraClass={styles.helpLinks}
          backgroundColor="grey"
          blockContent={data.Tour?.Contact?.textContact}
          orContent={data.Tour?.Contact?.textContactOr}
          whatsappData={data.Tour.Contact.wh}
          telegramData={data.Tour.Contact.tl}
        />
        <TourDescriptionSection
          extraClass={styles.tourDescription}
          data={data}
        />
        <FAQSection
          extraClass={styles.faq}
          sectionTitle={data.Tour.Faq.titleFaq}
          titlePosition="left"
          data={data.Tour.Faq.event}
        />
        <CardWithPriceSliderSection
          extraClass={styles.cardWithPriceSlider}
          data={data?.Tour.Similar}
          cardsApiData={data?.Tour?.Similar}
          hasButtons={false}
          titlePosition="left"
        />

        {data?.Tour?.Reviews && (
          <ReviewsSection
            extraClass={styles.reviews}
            sectionTitle={data.Tour.Reviews.starBlock.titleReviews}
            sectionTitlePosition="left"
            feedbackButtonContent={data.Tour.Reviews.starBlock.buttonReviews}
            popupData={data?.Tour?.Reviews?.starBlock?.buttonReviewsWindow}
            ratingData={data.Tour.Reviews.starBlock}
            usersReviews={data.Tour.Reviews.reviewPeople}
            showAllButton={data.Tour.Reviews.reviewPeople.allButton}
          />
        )}
        <CardWithPriceSliderSection
          extraClass={styles.cards}
          titlePosition="left"
          data={data}
          cardsApiData={data?.Similar?.product}
        />
        {data?.Tour?.Similar?.Tag && (
          <ButtonsSection
            extraClass={styles.buttons}
            sectionTitle={data?.Tour?.Similar?.Tag.title}
            sectionTitlePosition="left"
            buttonsArr={data?.Tour?.Similar?.Tag.nesting}
          />
        )}
      </div>
      <Footer data={data} />
    </div>
  );
};

export default TourDetailsPage;
