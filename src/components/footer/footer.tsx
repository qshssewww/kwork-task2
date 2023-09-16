"use client";

import styles from "./footer.module.scss";
import { useState } from "react";
import LocationClip from "@/images/logos/icons/location-clip.svg";
import GlobeLogo from "@/images/logos/icons/globe.svg";
import HeartWithNotification from "@/images/logos/icons/heart-with-notification.svg";
import BurgerMenuIcon from "@/images/logos/icons/burger-menu.svg";
import Image from "next/image";
import BurgerMenu from "../modals/burger-menu/burger-menu";
import MenuDropdown from "../ui/dropdown/menu-dropdown/menu-dropdown";
import HelpLinks from "../ui/help-links/help-links";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: any;
  extraClass?: string;
}

function Footer({ data, extraClass }: Props) {
  const isMobile = useMediaQuery("(max-width:660px)");
  const [isOpen, setIsOpen] = useState(false);
  const headerApiData = data?.Header;
  const footerApiState = data?.Footer;
  // console.log(footerApiState);
  return footerApiState ? (
    <footer className={`${styles.footer} ${extraClass}`}>
      {!isMobile ? (
        <div className={styles.infoSection}>
          <div className={styles.firstContainer}>
            <Image
              className={styles.logoImg}
              src={footerApiState.logo}
              alt="mainLogo"
              width={126}
              height={64}
            />
            <div className={styles.locationContainer}>
              <LocationClip width={17} height={19} />
              <p className={styles.location}>{footerApiState.city}</p>
            </div>
            <Image
              className={styles.logoIlnur}
              src={footerApiState.developerIcon.logo}
              alt="logoIlnur"
              width={97}
              height={61}
            />
          </div>
          <p className={styles.impressions}>{footerApiState.desc}</p>
          <div className={styles.linksSection}>
            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerApiState?.menu[0].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerApiState?.menu[0].nesting ? footerApiState?.menu[0].nesting.map(
                  (el: any, index: number) => {
                    return (
                      <li key={index}>
                        <p className={styles.textColumn}>{el.name}</p>
                      </li>
                    );
                  }
                ):
                null}
              </ul>
            </div>
            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerApiState?.menu[1].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerApiState?.menu[1].nesting ? footerApiState?.menu[1].nesting.map(
                  (el: any, index: number) => {
                    return (
                      <li key={index}>
                        <p className={styles.textColumn}>{el.name}</p>
                      </li>
                    );
                  }
                ):
                null}
              </ul>
            </div>

            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerApiState?.menu[2].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerApiState?.menu[2].nesting ? footerApiState?.menu[2].nesting
                  .slice(0, 6)
                  .map((el: any, index: number) => {
                    return (
                      <li key={index}>
                        <p className={styles.textColumn}>{el.name}</p>
                      </li>
                    );
                  })
                :
                null}
              </ul>
            </div>

            <div className={styles.linksContainer}>
              <ul className={styles.companyContainer}>
                {footerApiState?.menu[2].nesting ? footerApiState?.menu[2].nesting
                  .slice(7)
                  ?.map((el: any, index: number) => {
                    return (
                      <li key={index}>
                        <p className={styles.textColumn}>{el.name}</p>
                      </li>
                    );
                  }) :
                  null}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mobileFooter}>
          <div className={styles.mobileLogoContainer}>
            <Image
              width={133}
              height={70}
              className={styles.logoImg}
              src={footerApiState.logo}
              alt="mainLogo"
            />
            <p className={styles.impressions}>{footerApiState.desc}</p>
          </div>
          <div className={styles.mobileButtonsContainer}>
            <div className={styles.locationContainer}>
              <LocationClip width={17} height={19} />
              <p className={styles.location}>{footerApiState.city}</p>
            </div>
            <div className={styles.mobileIconsContainer}>
              <GlobeLogo className={styles.mobileIcon} width={38} height={38} />
              <HeartWithNotification className={styles.mobileIcon} />
              <BurgerMenuIcon
                className={styles.mobileIcon}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
          <div className={styles.mobileMenu}>
            {footerApiState.menu.map((el: any, index: number) => {
              return <MenuDropdown key={index} data={el} />;
            })}
            {headerApiData?.mobile?.Contact && (
              <HelpLinks
                blockContent={headerApiData?.mobile?.Contact?.textContact}
                orContent={headerApiData?.mobile?.Contact?.textContactOr}
                whatsappData={headerApiData?.mobile?.Contact?.wh}
                telegramData={headerApiData?.mobile?.Contact?.tl}
              />
            )}
          </div>
          <Image
            className={styles.logoIlnur}
            src={footerApiState.developerIcon.logo}
            alt="logoIlnur"
            width={97}
            height={61}
          />
        </div>
      )}
      {isOpen && (
        <BurgerMenu
          apiData={headerApiData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </footer>
  ) : null;
}

export default Footer;
