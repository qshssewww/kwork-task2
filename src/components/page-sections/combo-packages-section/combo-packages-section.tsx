"use client";

import styles from "./combo-packages-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import SectionTitle from "@/components/ui/section-title/section-title";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import { useState } from "react";
import TourStepModal from "./tour-step-modal";

interface Props {
  data: any;
  hasButtons: boolean;
  titlePosition?: "left" | "center";
}

function ComboPackagesSection({ data, hasButtons, titlePosition }: Props) {
  const comboApiData = data?.Combo;
  const [modalOpen, setModalOpen] = useState(false);

  return comboApiData ? (
    <section className={styles.main}>
      <div className={styles.contentContainer}>
        <SectionTitle content={comboApiData?.name} position={titlePosition} />
        <div className={styles.slider}>
          {
            comboApiData?.product?.length > 0
            ?
            <SplideMultipleSlider
            cardArray={comboApiData?.product}
            hasButtons={hasButtons}
            cardExtraClass={styles.card}
          />
            :
            null
          }
          
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => setModalOpen(true)} extraClass={styles.button} content={comboApiData?.button} />
        </div>
        <TourStepModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </section>
  ) : null;
}

export default ComboPackagesSection;
