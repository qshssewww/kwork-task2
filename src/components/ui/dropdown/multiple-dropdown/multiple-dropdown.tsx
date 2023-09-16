"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import ArrowDown from "../../../../images/logos/icons/arrow-down.svg";
import styles from "./multiple-dropdown.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Cookies from "js-cookie";

export interface Props {
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  extraClass?: string;
  extraClassTitle?: string;
  content?: string;
  arr?: any;
  arrWithLanguages: any;
  arrWithCurrency: any;
  icon?: string;
  size?: "small" | "medium";
  arrow?: boolean;
  color?: 'white' | 'darkBlue';

}
export {};

  declare global {
    interface Window {
      lang: string;
    }
  }

const MultipleDropDown: React.FC<Props> = ({
  extraClass,
  size = "small",
  arrWithLanguages,
  extraClassTitle,
  arrWithCurrency,
  color = 'white'
}) => {
  const className = clsx(
    styles.container,
    {
      [styles?.[`dropdown_size_${size}`]]: size,
      [styles?.[`dropdown_color_${color}`]]: color,
    },
    extraClass
  );

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [languageState, setLanguageState] = useState<any>();
  const [currencyState, setCurrencyState] = useState<any>();
  const defaultLang = 'en';

  useEffect(() => {
    var url = window.location.pathname.split('/');
    if (url[1]) {
      var lang : any = false;
      // const lang: { text?: string };
      if (arrWithLanguages[url[1]] ) lang = arrWithLanguages[url[1]];
      if (!lang || !arrWithLanguages[lang.urlCode]) lang = arrWithLanguages[defaultLang];
      setLanguageState(arrWithLanguages[lang?.urlCode]);
      var langCookie : any = Cookies.get('lang');
      if (langCookie) langCookie = JSON.parse(langCookie);
      if (!langCookie || langCookie['urlCode'] != lang?.['urlCode']) {
        var langCookieObj = {
          urlCode: lang?.['urlCode'],
          lang: lang?.['lang']
        }
        var json = JSON.stringify(langCookieObj);
        Cookies.set('lang', json, {expires: 365});
        window.location.href = lang?.['url'];
      }
      window.lang = lang?.urlCode;

      var currency : any = false
      var currencyObj = false;
      var currencyCookie = Cookies.get('currency');
      if (currencyCookie) currency = currencyCookie;
      if (currency) {
        currencyObj = arrWithCurrency?.filter(
            (el: any) => el?.code?.toLowerCase() === currency?.toLowerCase()
        )[0];
      }
      if (!currencyObj) setCurrencyState(arrWithCurrency && [...arrWithCurrency][0]);
      else setCurrencyState(currencyObj);
    }
  }, [arrWithLanguages, arrWithCurrency]);

  const chooseLanguage = (e: SyntheticEvent) => {
    const inputName = e.currentTarget.getAttribute("li-name");
    var langObj : any = Object.values(arrWithLanguages)?.filter(
        (el: any) => el.lang.toLowerCase() === inputName?.toLowerCase()
    )[0];
    setLanguageState(langObj);
    var langCookie = {
      urlCode: langObj['urlCode'],
      lang: langObj['lang']
    }
    var json = JSON.stringify(langCookie);
    Cookies.set('lang', json, { expires: 365 })
    window.location.href = langObj['urlCode'];
  };

  const chooseCurrency = (e: SyntheticEvent) => {
    const inputName = e.currentTarget.getAttribute("li-name");
    var currencyObj = arrWithCurrency?.filter(
        (el: any) => el.currency.toLowerCase() === inputName?.toLowerCase()
    )[0];
    setCurrencyState(currencyObj);
    Cookies.set('currency', currencyObj['code'], { expires: 365 });
    window.location.reload();
  };

  const openDropDownMenu = () => {
    setIsDropDownActive(true);
  };

  const closeDropDownMenu = () => {
    setIsDropDownActive(false);
  };

  return (
    <div
      className={className}
      onMouseOver={openDropDownMenu}
      onMouseOut={closeDropDownMenu}
    >
      <div className={styles.titleContainers}>
        <div
          className={`${styles.titleContainer} ${
            isDropDownActive && styles.titleContainerActive
          }`}
        >
          {arrWithLanguages && languageState?.icon && (
            <Image
              src={languageState?.icon}
              alt={`${languageState?.lang} flag icon`}
              width={24}
              height={18}
            />
          )}
          <p className={`${styles.title} ${extraClassTitle}`}>
            {languageState?.lang}
          </p>

          <ArrowDown className={styles.arrow} width={16} height={16}/>
        </div>

        <div
          className={`${styles.titleContainer} ${
            isDropDownActive && styles.titleContainerActive
          }`}
        >
          <p className={`${styles.title} ${extraClassTitle}`}>
            {currencyState?.currency}
          </p>
           <ArrowDown className={styles.arrow} width={16} height={16}/>
        </div>
      </div>
      <div
        className={`${styles.transparentContainer} ${
          isDropDownActive && styles.transparentContainerActive
        }`}
      >
        <div className={styles.dropDownListsContainers}>
          <div className={styles.dropDownListContainers}>
            <p className={styles.dropDownListItemTitle}>Language</p>
            <ul className={styles.dropDownListContainer}>
              {arrWithLanguages &&
                Object.values(arrWithLanguages).map((el: any, index: number) => {
                  return (
                    <li
                      key={index}
                      className={styles.dropDownListItem}
                      li-name={el.lang}
                      onClick={chooseLanguage}
                    >
                      <Image
                        src={el?.icon}
                        alt={`${el.lang} flag icon`}
                        width={24}
                        height={18}
                      />
                      <p className={styles.listItemContent}>{el.lang}</p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div
            className={`${styles.dropDownListContainer} ${styles.dropDownListContainerGrey}`}
          >
            <p className={styles.dropDownListItemTitle}>Currency</p>
            <ul className={styles.dropDownListContainer}>
              {arrWithCurrency &&
                arrWithCurrency.map((el: any, index: number) => {
                  return (
                    <li
                      key={index}
                      className={styles.dropDownListItem}
                      li-name={el.currency}
                      onClick={chooseCurrency}
                    >
                      <p className={styles.listItemContent}>{el.currency}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleDropDown;
