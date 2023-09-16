"use client";

import styles from "./feedback-modal.module.scss";
import CloseButton from "@/images/logos/icons/close-popup-button.svg";
import { Montserrat } from "next/font/google";
import Modal from "react-modal";
import FeedbackModalApproval from "./feedback-modal-approval/feedback-modal-approval";
import FeedbackModalContent from "./feedback-modal-content/feedback-modal-content/feedback-modal-content";
import { useMediaQuery } from "@mui/material";

interface Props {
  isPopupOpen: boolean;
  closePopup: any;
  data: any;
  extraClass?: string;
  tourId: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function FeedbackModal({
  extraClass,
  isPopupOpen,
  closePopup,
  data,
  tourId,
}: Props) {
  const isMobile = useMediaQuery("(max-width:800px)");

  const overlayStyles = {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.6)",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: montserrat.style.fontFamily,
  };

  const overlayStylesMobile = {
    background: "#fff",
    zIndex: 1000,
    fontFamily: montserrat.style.fontFamily,
  };

  const contentStylesMobile = {
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    minWidth: "100vw",
    minHeight: "100vh",
    borderWidth: "0",
    borderRadius: "0",
  };

  const contentStyles = {
    maxWidth: "606px",
    height: "fit-content",
    inset: '0px',
    padding: "88px 105px 99px 104px",
    boxSizing: "border-box" as "border-box",
    margin: "auto",
    border: "none",
    overflow: "hidden",
    cursor: "default",
  };

  return (
    data && (
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        style={{
          overlay: isMobile ? overlayStylesMobile : overlayStyles,
          content: isMobile ? contentStylesMobile : contentStyles,
        }}
        className={styles.modal}
        ariaHideApp={false}
      >
        <div className={`${styles.container} ${extraClass}`}>
          <button className={styles.closeButton} onClick={closePopup}>
            <CloseButton width={40} height={40} />
          </button>
          <div className={styles.contentContainer}>
            <FeedbackModalContent data={data} tourId={tourId} />
            {/* <FeedbackModalApproval
              data={data.feedbackThank}
              onClose={closePopup}
            /> */}
          </div>
        </div>
      </Modal>
    )
  );
}
export default FeedbackModal;
