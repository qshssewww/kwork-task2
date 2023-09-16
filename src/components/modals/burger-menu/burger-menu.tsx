"use client";

import styles from "./burger-menu.module.scss";
import Modal from "react-modal";
import HeartWithNotification from "@/images/logos/icons/heartModal.svg";
import HeartIcon from "@/images/logos/icons/heart-dark.svg";
import LoopModal from "@/images/logos/icons/loopModal.svg";
import LocationClipDark from "@/images/logos/icons/location-clip-dark.svg";
import GlobeLogoDark from "@/images/logos/icons/globe-black.svg";
import CloseModal from "@/images/logos/icons/closeModal.svg";
import Image from "next/image";
import MenuDropdown from "@/components/ui/dropdown/menu-dropdown/menu-dropdown";
import Button from "@/components/ui/buttons/button/button";
import { Dispatch, SetStateAction } from "react";
import HelpLinks from "@/components/ui/help-links/help-links";

interface Props {
  apiData: any;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// const testData = [
//   {
//     name: "Tour",
//     url: "site.com",
//     nesting: [],
//   },
//   {
//     name: "Transfers",
//     url: "site.com",
//     nesting: [],
//   },
//   {
//     name: "Company",
//     url: "site.com",
//     nesting: [],
//   },
//   {
//     name: "Clients",
//     url: "site.com",
//     nesting: [
//       {
//         name: "Checkout",
//         url: "site.com",
//       },
//       {
//         name: "FAQ",
//         url: "site.com",
//       },
//     ],
//   },
// ];

function BurgerMenu({ apiData, isOpen, setIsOpen }: Props) {
  return apiData ? (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{ overlay: { zIndex: 1000, background: "#fff" } }}
      className={styles.modal}
      ariaHideApp={false}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <Image
            className={styles.logo}
            src={apiData?.logo}
            alt="logo"
            width={131}
            height={44}
            priority
          ></Image>
          <div className={styles.headingButtonsContainer}>
            <button className={styles.button}>
              <GlobeLogoDark
                className={styles.mobileIcon}
                width={38}
                height={38}
              />
            </button>
            <button className={styles.button}>
              <HeartWithNotification width={38} height={38} />
            </button>
            <button className={styles.button}>
              <LoopModal width={38} height={38} />
            </button>
            <button className={styles.button} onClick={() => setIsOpen(false)}>
              <CloseModal width={38} height={38} />
            </button>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <ul className={styles.menu}>
            <li className={styles.location}>
              <LocationClipDark width={24} height={27} />
              <p className={styles.locationContent}>ОАЭ, Дубай</p>
            </li>
            {apiData?.menu.map((el: any, index: number) => {
              return <MenuDropdown key={index} data={el} />;
            })}
          </ul>

          <div className={styles.modalInfoContainer}>
            <div className={styles.buttonsContainer}>
              <Button
                extraClass={styles.buttonExtraClass}
                content="Sign up"
                size="medium"
              />
              <Button
                extraClass={styles.buttonExtraClass}
                content={apiData?.wishlist.name}
                Icon={HeartIcon}
                IconWidth={21}
                IconHeight={21}
                size="medium"
              />
            </div>

            {apiData?.mobile?.Contact && (
              <HelpLinks
                backgroundColor="grey"
                blockContent={apiData?.mobile?.Contact?.textContact}
                orContent={apiData?.mobile?.Contact?.textContactOr}
                whatsappData={apiData?.mobile?.Contact?.wh}
                telegramData={apiData?.mobile?.Contact?.tl}
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  ) : null;
}

export default BurgerMenu;
