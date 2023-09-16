"use client";

import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import DropDown from "../ui/dropdown/dropdown";
import Button from "../ui/buttons/button/button";
import GlobeLogo from "../../images/logos/icons/globe.svg";
import DarkGlobe from "@/images/logos/icons/globe-black.svg";
import HeartWithNotification from "../../images/logos/icons/heart-with-notification.svg";
import DarkHeartWithNotification from "../../images/logos/icons/heart-with-notification-dark.svg";
import MagnifyingGlassThin from "../../images/logos/icons/headLoop.svg";
import MagnifyingGlassThinDark from "../../images/logos/icons/magnifying-glass-dark.svg";
import BurgerMenuIcon from "../../images/logos/icons/burger-menu.svg";
import BurgerMenuIconDark from "../../images/logos/icons/burger-menu-dark.svg";

import MultipleDropDown from "../ui/dropdown/multiple-dropdown/multiple-dropdown";
import BurgerMenu from "../modals/burger-menu/burger-menu";
import clsx from "clsx";
import Link from "next/link";
import { getCookie } from "@/utils/cookie";
import CityModal from "@/components/modals/city-modal/CityModal";
import { useMediaQuery } from "@mui/material";
import Cookies from "js-cookie";

interface Props {
  data: any;
  searchSectionSize?: "full" | "fixed";
  colorTheme?: "light" | "dark";
  position?: "block" | "absolute";
  extraClass?: string;
  locationContainer?: boolean;
}



function Header({
  data,
  searchSectionSize = "full",
  colorTheme = "light",
  position = "absolute",
  locationContainer = true,
  extraClass,
}: Props) {
  const isMobile = useMediaQuery("(max-width:1040px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setLoginModal] = useState(false);
  const [isOpenLoc, setOpenLoc] = useState(false);
  const [curLang, setLang] = useState("en");
  const [countryName, setCountryName] = useState(false);
  const headerApiData = data?.Header;
  const [token, setToken] = useState(null);
  // console.log(data,"---sad")
  const headerClassName = clsx(
    styles.transparentContainer,
    {
      [styles?.[`header_colorTheme_${colorTheme}`]]: colorTheme,
      [styles?.[`header_position_${position}`]]: position,
    },
    extraClass
  );

  const locationContainerClass = clsx(styles.locationContainer, {
    [styles?.[`locationContainer_hidden`]]: locationContainer,
  });

  const checkRedirect = () => {
    const defaultLang = "en";
    var url = window.location.pathname;
    if (url == "/") {
      let langCookie = Cookies.get("lang");
      let langObject : {urlCode: string | null} = {urlCode: null}
      if (langCookie) langObject = JSON.parse(langCookie);

      if (langObject?.urlCode) window.location.href = langObject.urlCode;
      else window.location.href = defaultLang;
    }
  };

  useEffect(() => {
    var url = window.location.pathname.split("/");
    if (url[1]) setLang(url[1]);
    setToken(getCookie("token"));
  }, []);

  if (typeof window != "undefined") checkRedirect();

  return (
    <header className={`${headerClassName} ${styles.div1}`}>
      {isOpen && (
        <BurgerMenu
          apiData={headerApiData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <div className={styles.container}>
        <div className={styles.mainContentContainer}>
          <Link className={styles.link} href={"/"}>
            <Image
              className={styles.mainLogo}
              src={headerApiData.logo}
              alt="logo"
              width={253}
              height={106}
              priority
            />
          </Link>

          {!isMobile ? (
            <>
              <div className={styles.contentContainer}>
                <div className={styles.locationInfo}>
                  <div
                    className={locationContainerClass}
                    onClick={() => {
                      setOpenLoc(true);
                    }}
                  >
                    <Image
                      className={styles.locationIcon}
                      src={headerApiData.lication.icon}
                      alt="location clip"
                      width={30}
                      height={30}
                      priority
                    />
                    <p className={styles.locationContent}>{countryName}</p>
                  </div>
                  <MultipleDropDown
                    arrWithLanguages={headerApiData.language.list}
                    arrWithCurrency={headerApiData.currency.exchange}
                    arrow={true}
                    color={colorTheme === "light" ? "darkBlue" : "white"}
                  />
                </div>
                <ul className={styles.menuContainer}>
                  <Link className={styles.link} href={"/en/tour"}>
                    <li className={styles.menuItem}>
                      {headerApiData.menu[0].name}
                    </li>
                  </Link>

                  <Link href={"/en/tour"}>
                    <li className={styles.menuItem}>
                      {headerApiData.menu[0].name}
                    </li>
                  </Link>

                  <li className={styles.menuItem}>
                    {headerApiData.menu[1].name}
                  </li>
                  <li className={styles.menuItem}>
                    <DropDown
                      title={headerApiData.menu[2].name}
                      arr={headerApiData.menu[2].nesting}
                      color={colorTheme === "light" ? "darkBlue" : "white"}
                    ></DropDown>
                  </li>
                  <li className={styles.menuItem}>
                    <DropDown
                      title={headerApiData.menu[3].name}
                      arr={headerApiData.menu[3].nesting}
                      color={colorTheme === "light" ? "darkBlue" : "white"}
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.buttonsContainer}>
                <Link className={styles.link} href={`/wishlist`}>
                  <Button
                    iconUrl={headerApiData.wishlist.icon}
                    iconExtraClass={styles.heart}
                    content={headerApiData.wishlist.name}
                    background="transparent"
                    contentColor={colorTheme === "dark" ? "white" : "darkBlue"}
                    border="none"
                  />
                </Link>
                <Link
                  className={styles.link}
                  href={
                    token
                      ? "/" + curLang + "/personal"
                      : "/" + curLang + "/login"
                  }
                >
                  <Button
                    onClick={() => setLoginModal(true)}
                    content={headerApiData.registration}
                  />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={styles.mobileContainer}>
                {colorTheme === "dark" && (
                  <>
                    <GlobeLogo
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <HeartWithNotification
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <MagnifyingGlassThin
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <BurgerMenuIcon
                      onClick={() => setIsOpen(true)}
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                  </>
                )}
                {colorTheme === "light" && (
                  <>
                    <DarkGlobe
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <DarkHeartWithNotification
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <MagnifyingGlassThinDark
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <BurgerMenuIconDark
                      onClick={() => setIsOpen(true)}
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                  </>
                )}
              </div>
              {searchSectionSize === "full" ||
                (locationContainer && (
                  <div className={styles.locationContainer}>
                    <Image
                      className={styles.locationIcon}
                      src={headerApiData.lication.icon}
                      alt="location clip"
                      width={30}
                      height={30}
                      priority
                    />

                    {/* <p className={styles.locationContent}>
                      {headerApiData.lication.city}
                    </p> */}
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
      {/*<CityModal
        isOpen={isOpenLoc}
        setOpen={setOpenLoc}
        setCountryName={setCountryName}
        cities={data["window"]["locationWondow"]["city"]}
      />*/}
    </header>
  );
}

export default Header;
